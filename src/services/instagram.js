import {data} from "./instagram-posts";

import {DEVELOPMENT, INSTAGRAM_ID, INSTAGRAM_USERNAME} from "../../constants/deploy";
import Instagram from "instagram-web-api";

export const getInstagramPosts = async () => {

  return []
/*  if (DEVELOPMENT) {
    return data
  }
  
  const client = new Instagram({ username: 'razvanbretoiu', password: 'eusicutine1994.' });
  
  try {
    await client.login()
  } catch (err) {
    
    if (err.error && err.error.message === 'checkpoint_required') {
      console.log('Challenge failed!', 'Performing new challenge...');
      
      const challengeUrl = err.error.checkpoint_url;
      await client.updateChallenge({ challengeUrl, choice: 1 });
    }
  }
  
  console.log("After login succsefuly")
  const response = await client.getPhotosByUsername({ id: 'razvanbretoiu', first: 24 });
  
  const values = response.user.edge_owner_to_timeline_media.edges;
  
  console.log(values.length)
  fs.writeFile('instagram-posts.json', JSON.stringify(values), [], (err) => {
    if (err) return console.log(err);
  })
  
  return values*/
}
