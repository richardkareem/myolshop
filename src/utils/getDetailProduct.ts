import axios from "axios"
const getDetailProduct = async(urlProd: string) =>{
    try {
        const url = 'https://gql.tokopedia.com/graphql/PDPGetDataP2';
        const headers = {
            'sec-ch-ua': '"Opera";v="111", "Chromium";v="125", "Not.A/Brand";v="24"',
            'X-Version': '103e16d',
            'X-TKPD-AKAMAI': 'pdpGetData',
            'x-theme': 'default',
            'sec-ch-ua-mobile': '?0',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 OPR/111.0.0.0',
            'content-type': 'application/json',
            'accept': '*/*',
            'Referer': 'https://www.tokopedia.com/falahshop28/jas-hujan-tiger-head-stelan-setelan-popular-68310-original-mirip-axio-hitam?extParam=src%3Dshop%26whid%3D621651',
            'x-dark-mode': 'false',
            'X-Source': 'tokopedia-lite',
            'x-device': 'desktop',
            'X-Tkpd-Lite-Service': 'zeus',
            'sec-ch-ua-platform': '"Windows"'
        };
        const data = {
            operationName: 'PDPGetDataP2',
            variables: {
                affiliate: null,
                productID: '2766398444',
                pdpSession: "{\"sid\":1329711,\"sd\":\"falahshop28\",\"cat\":{\"id\":1318,\"d\":[{\"name\":\"Otomotif\",\"breadcrumb_url\":\"https://www.tokopedia.com/p/otomotif\",\"id\":63,\"is_adult\":false},{\"name\":\"Aksesoris Pengendara Motor\",\"breadcrumb_url\":\"https://www.tokopedia.com/p/otomotif/aksesoris-pengendara-motor\",\"id\":1316,\"is_adult\":false},{\"name\":\"Jas Hujan\",\"breadcrumb_url\":\"https://www.tokopedia.com/p/otomotif/aksesoris-pengendara-motor/jas-hujan\",\"id\":1318,\"is_adult\":false}]},\"pid\":1396893983,\"ppn\":\"Jas Hujan Tiger Head Stelan/Setelan Popular 68310 Original Mirip Axio\",\"dcid\":2766398444,\"cp\":{\"lr\":{}},\"opr\":210000,\"pr\":210000,\"mo\":1,\"pn\":\"Jas Hujan Tiger Head Stelan/Setelan Popular 68310 Original Mirip Axio - Hitam\",\"purl\":\"https://www.tokopedia.com/falahshop28/jas-hujan-tiger-head-stelan-setelan-popular-68310-original-mirip-axio-hitam\",\"st\":99,\"cn\":\"new\",\"li\":1,\"ln\":\"Default Layout Desktop\",\"w\":0.95,\"sf\":{},\"nid\":3,\"stat\":{\"cv\":1729,\"cr\":3,\"r\":4.7,\"cs\":4,\"mcs\":\"4\"},\"fst\":[{\"FSID\":0,\"PartnerName\":\"\",\"FSType\":0,\"ShopID\":0}],\"mnwhs\":{\"1396893983\":{\"pid\":1396893983,\"wid\":621651,\"pr\":195000},\"2766398441\":{\"pid\":2766398441,\"wid\":621651,\"pr\":210000,\"s\":100},\"2766398443\":{\"pid\":2766398443,\"wid\":621651,\"pr\":210000,\"s\":100},\"2766398444\":{\"pid\":2766398444,\"wid\":621651,\"pr\":210000,\"s\":99}},\"umps\":3,\"da\":{\"playstore_status\":\"NORMAL\"},\"exp\":{\"saatc\":true},\"patcs\":{\"lid\":21,\"pi\":2766398444,\"pid\":1396893983,\"whid\":621651,\"pr\":210000,\"opr\":210000,\"cat\":{\"id\":1318},\"cn\":\"NEW\",\"ofr\":{},\"stf\":{}},\"v\":1,\"vd\":{\"2766398441\":{\"cp\":{\"lr\":{}},\"s\":100,\"ib\":true,\"p\":210000,\"op\":210000,\"isc\":true,\"whid\":621651,\"mo\":1,\"patcs\":{\"pi\":2766398441,\"pid\":1396893983,\"whid\":621651,\"pr\":210000,\"opr\":210000,\"cat\":{\"id\":1318},\"cn\":\"NEW\",\"ofr\":{},\"stf\":{}}},\"2766398443\":{\"cp\":{\"lr\":{}},\"s\":100,\"ib\":true,\"p\":210000,\"op\":210000,\"isc\":true,\"whid\":621651,\"mo\":1,\"patcs\":{\"pi\":2766398443,\"pid\":1396893983,\"whid\":621651,\"pr\":210000,\"opr\":210000,\"cat\":{\"id\":1318},\"cn\":\"NEW\",\"ofr\":{},\"stf\":{}}},\"2766398444\":{\"cp\":{\"lr\":{}},\"s\":99,\"ib\":true,\"p\":210000,\"op\":210000,\"isc\":true,\"whid\":621651,\"mo\":1,\"patcs\":{\"pi\":2766398444,\"pid\":1396893983,\"whid\":621651,\"pr\":210000,\"opr\":210000,\"cat\":{\"id\":1318},\"cn\":\"NEW\",\"ofr\":{},\"stf\":{}}}}},\"pi\":2766398444,\"pse\":1,\"ps\":\"ACTIVE\",\"src\":\"shop\",\"fc\":[\"tidak_kadaluwarsa\"],\"cod\":true,\"cui\":{},\"srq\":{\"rs\":4.8,\"tr\":10896,\"trt\":19802},\"prtg\":{\"rs\":\"4.7\",\"tr\":3,\"trf\":\"3\",\"trti\":2,\"trtif\":\"2\"},\"wc\":1,\"ispt\":true,\"p2c\":{},\"zid\":1}",
                deviceID: 'NGE5NWI2MzBjZGQwODllYTliOTdiZGVkZWIwMDI3YmFmZDc4ZWM2NGEyNmM4OGM1NzA2MWE3MzBmNWIyZWNlZjBjODUyYzhjOTlmNmU5NzJjZGNiNGMxZjNlM2RmMjg247DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
                userLocation: {
                    cityID: '178',
                    addressID: '146972642',
                    districtID: '2294',
                    postalCode: '13760',
                    latlon: '-6.292521099999999,106.8625721'
                },
                tokonow: {
                    shopID: '11530573',
                    whID: '13403378',
                    serviceType: '2h'
                }
            },
            query: `query PDPGetDataP2($productID: String!, $pdpSession: String!, $deviceID: String, $userLocation: pdpUserLocation, $affiliate: pdpAffiliate) {
              
            }`
        };
                
    const res = await  axios.post(url, data, {headers})
    return res.data
    } catch (error) {
        console.log(error)
    }
    
     
}

export default getDetailProduct;