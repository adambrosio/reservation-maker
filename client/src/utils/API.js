

module.exports = {
  businessResults: (business) => {
    fetch("/api/business", {
      method: "POST",
      mode: "cors",
      body:JSON.stringify(business)
    })
    .then(result => result.json())
    .then(result => {
      this.fetchBusiness();
    })
  },

  getUserData: () => {
    let myData;

    fetch("/api/user")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    });

  }

}
