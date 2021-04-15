import {data} from "./instagram-posts";

export const getInstagramPosts = async () => {
  
  // if (DEVELOPMENT) {
  //   return []
  // }
  
/*  const client = new Instagram({ username: 'grasshoppher' });
  const response = await client.getUserIdPhotos({ id: '8193704282', first: 24 });
  const values = response.user.edge_owner_to_timeline_media.edges;*/
  
  
  // fs.writeFile('instagram-posts.json', JSON.stringify(values), [], (err) => {
  //   if (err) return console.log(err);
  //   console.log('Hello World > helloworld.txt');
  // })
  // const data =  fs.readFileSync('./instagram-posts.json', 'utf8');
  return data
}
