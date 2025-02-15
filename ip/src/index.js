import './style.css';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
    const ipElement = document.getElementById('ip');
    const ispElement = document.getElementById('isp');
    const cityElement = document.getElementById('city');
    const regionElement = document.getElementById('region');
    const countryElement = document.getElementById('country');
    const locationElement = document.getElementById('location');
    const postalElement = document.getElementById('postal');
    const timezoneElement = document.getElementById('timezone');
    const asnElement = document.getElementById('asn');
    const orgElement = document.getElementById('org');
    const latitudeElement = document.getElementById('latitude');
    const longitudeElement = document.getElementById('longitude');
    const countryCodeElement = document.getElementById('country_code');
    const regionCodeElement = document.getElementById('region_code');
    const continentCodeElement = document.getElementById('continent_code');
    const countryCallingCodeElement = document.getElementById('country_calling_code');
    const currencyElement = document.getElementById('currency');

    axios.get('https://ipapi.co/json/')
        .then(response => {
            ipElement.textContent = response.data.ip;
            ispElement.textContent = response.data.org;
            cityElement.textContent = response.data.city;
            regionElement.textContent = response.data.region;
            countryElement.textContent = response.data.country_name;
            locationElement.textContent = `${response.data.latitude}, ${response.data.longitude}`;
            postalElement.textContent = response.data.postal;
            timezoneElement.textContent = response.data.timezone;
            asnElement.textContent = response.data.asn;
            orgElement.textContent = response.data.org;
            latitudeElement.textContent = response.data.latitude;
            longitudeElement.textContent = response.data.longitude;
            countryCodeElement.textContent = response.data.country;
            regionCodeElement.textContent = response.data.region_code;
            continentCodeElement.textContent = response.data.continent_code;
            countryCallingCodeElement.textContent = response.data.country_calling_code;
            currencyElement.textContent = response.data.currency;
        })
        .catch(error => {
            ipElement.textContent = 'Error fetching IP';
            ispElement.textContent = 'Error fetching ISP';
            cityElement.textContent = 'Error fetching city';
            regionElement.textContent = 'Error fetching region';
            countryElement.textContent = 'Error fetching country';
            locationElement.textContent = 'Error fetching location';
            postalElement.textContent = 'Error fetching postal';
            timezoneElement.textContent = 'Error fetching timezone';
            asnElement.textContent = 'Error fetching ASN';
            orgElement.textContent = 'Error fetching organization';
            latitudeElement.textContent = 'Error fetching latitude';
            longitudeElement.textContent = 'Error fetching longitude';
            countryCodeElement.textContent = 'Error fetching country code';
            regionCodeElement.textContent = 'Error fetching region code';
            continentCodeElement.textContent = 'Error fetching continent code';
            countryCallingCodeElement.textContent = 'Error fetching country calling code';
            currencyElement.textContent = 'Error fetching currency';
            console.error(error);
        });
});
