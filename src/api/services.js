/** primarily used to get services datat
 *  FUTURE:???  change services
 *    I may create an administrave application or incorporate an admin directory
 *      in this appliction (probably)
 * 
 * talks to the database reguarding services
 */
import { BASE_URL } from "./index.js";

export const getServices = async () => {
  try {
    const response = await fetch(BASE_URL + '/services');
    const services = await response.json();
    return services
  } catch(err) {
    console.log(err)
  }
};