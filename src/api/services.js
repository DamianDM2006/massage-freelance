/** primarily used to get services datat
 *  FUTURE:???  change services
 *    I may create an administrave application or incorporate an admin directory
 *      in this appliction (probably)
 * 
 * talks to the database reguarding services
 */
import { BASE_URL } from "./index.js";

export const getServices = async () => {
  console.log(typeof BASE_URL);
  try {
    const response = await fetch(BASE_URL + '/services');
    console.log(response);
    const services = await response.json();
    console.log(services);
    return services
  } catch(err) {
    console.log(err)
  }
};