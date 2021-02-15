import Instagram from "instagram-web-api";
import {INSTAGRAM_ID, INSTAGRAM_USERNAME, DEVELOPMENT} from "../../constants/deploy";

export const getInstagramPosts = async () => {
  
  if (DEVELOPMENT) {
    return []
  }
  
  const client = new Instagram({ username: INSTAGRAM_USERNAME });
  const response = await client.getUserIdPhotos({ id: INSTAGRAM_ID, first: 24 });
  
  return response.user.edge_owner_to_timeline_media.edges;
}
