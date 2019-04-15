const axios = require("axios");

module.exports = async function getRepos(user) {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    const repos = data.map(
      ({
        name = "",
        description = "",
        clone_url = "",
        html_url = "",
        owner = {}
      }) => {
        return {
          name,
          description,
          url: html_url,
          clone: clone_url,
          ownerName: owner.login || "",
          ownerAvatar: owner.avatar_url || ""
        };
      }
    );

    return repos;
  } catch (error) {
    console.error(error);
  }
};
