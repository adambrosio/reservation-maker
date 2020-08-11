businessResults = (business) => {
    fetch("/api/business", {
        method: "POST",
        mode: "cors",
        body:JSON.stringify(business)
    })
    .then(result => result.json())
    .then(result => {
        // fetchBusiness() not defined yet
        this.fetchBusiness();
    })
}

