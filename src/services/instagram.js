import Instagram from "instagram-web-api";
import {INSTAGRAM_ID, INSTAGRAM_USERNAME, DEVELOPMENT} from "../../constants/deploy";

export const getInstagramPosts = async () => {
  
  if (DEVELOPMENT) {
    return []
  }
  
  console.log(INSTAGRAM_ID, INSTAGRAM_USERNAME)
  const client = new Instagram({ username: 'grasshoppher' });
  const response = await client.getUserIdPhotos({ id: '8193704282', first: 24 });
  
  console.log(response)
  return response.user.edge_owner_to_timeline_media.edges;
}
