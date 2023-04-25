import axios from "axios";


const api = axios.create({
    /* baseURL: "http://localhost:3000/api/", */
    baseURL: `${import.meta.env.VITE_BASE_API_URL}/`,

});

export const postContactsForm = (formObj) => {

    return api.post(`/api/contacts/add`, formObj)
        .then((result) => {
            //console.log(result)
            return result;
        });

};

export const getPortfolioList = () => {

    return api.get(`/api/portfolios/index`)
        .then((result) => {
            //console.log(result)
            return result.data;
        });

};