import axios from "axios";

const query = {
    operationName: 'ShopProducts',
    variables: {
        source: 'shop',
        sid: '1329711',
        page: 0,
        perPage: 80,
        etalaseId: 'etalase',
        sort: 100,
        user_districtId: '2294',
        user_cityId: '178',
        user_lat: '-6.292521099999999',
        user_long: '106.8625721'
    },
    query: `
    query ShopProducts($sid: String!, $source: String, $page: Int, $perPage: Int, $keyword: String, $etalaseId: String, $sort: Int, $user_districtId: String, $user_cityId: String, $user_lat: String, $user_long: String) {
      GetShopProduct(
        shopID: $sid,
        source: $source,
        filter: {
          page: $page,
          perPage: $perPage,
          fkeyword: $keyword,
          fmenu: $etalaseId,
          sort: $sort,
          user_districtId: $user_districtId,
          user_cityId: $user_cityId,
          user_lat: $user_lat,
          user_long: $user_long
        }
      ) {
        status
        errors
        links {
          prev
          next
          __typename
        }
        data {
          name
          product_url
          product_id
          price {
            text_idr
            __typename
          }
          primary_image {
            original
            thumbnail
            resize300
            __typename
          }
          flags {
            isSold
            isPreorder
            isWholesale
            isWishlist
            __typename
          }
          campaign {
            discounted_percentage
            original_price_fmt
            start_date
            end_date
            __typename
          }
          label {
            color_hex
            content
            __typename
          }
          label_groups {
            position
            title
            type
            url
            __typename
          }
          badge {
            title
            image_url
            __typename
          }
          stats {
            reviewCount
            rating
            averageRating
            __typename
          }
          category {
            id
            __typename
          }
          __typename
        }
        __typename
      }
    }
  `
};

// Endpoint GraphQL yang akan dijangkau
const endpoint = 'https://gql.tokopedia.com/graphql/ShopProducts';
async function getDataProduct() {
    try {
        const response = await axios.post(endpoint, query, {
            headers: {
                'sec-ch-ua': '"Chromium";v="124", "Opera";v="110", "Not-A.Brand";v="99"',
                'X-Version': '103e16d',
                'sec-ch-ua-mobile': '?0',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 OPR/110.0.0.0',
                'content-type': 'application/json',
                'accept': '*/*',
                'Referer': 'https://www.tokopedia.com/falahshop28',
                'X-Source': 'tokopedia-lite',
                'X-Device': 'default_v3',
                'X-Tkpd-Lite-Service': 'zeus',
                'sec-ch-ua-platform': '"Windows"'
            }
        });

        const data = response.data.data.GetShopProduct.data;
        const filtered = data.map((item : any) => {
            return {
                product_id: item.product_id,
                product_name: item.name,
                images: item.primary_image.original,
                price: item.price.text_idr,
                product_url: item.product_url,
                rating: item.stats.averageRating
            }

        })
        return filtered
    } catch (error) {
        return error
    }
}
export default getDataProduct;
// Panggil fungsi untuk memulai pengambilan data


// curl 'https://api.newfemme.co/V1/SWMEcom/product/productByBrands/925?page=10&key=' \
//   -H 'accept: application/json, text/plain, */*' \
//   -H 'accept-language: en-US,en;q=0.9' \
//   -H 'origin: https://newfemme.co' \
//   -H 'priority: u=1, i' \
//   -H 'referer: https://newfemme.co/' \
//   -H 'sec-ch-ua: "Chromium";v="124", "Opera";v="110", "Not-A.Brand";v="99"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "Windows"' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: same-site' \
//   -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 OPR/110.0.0.0'


// curl '' \
//   -H 'accept: application/json, text/plain, */*' \
//   -H 'accept-language: en-US,en;q=0.9' \
//   -H 'origin: https://newfemme.co' \
//   -H 'priority: u=1, i' \
//   -H 'referer: https://newfemme.co/' \
//   -H 'sec-ch-ua: "Chromium";v="124", "Opera";v="110", "Not-A.Brand";v="99"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "Windows"' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: same-site' \
//   -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 OPR/110.0.0.0'