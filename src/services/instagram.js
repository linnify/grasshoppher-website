
export const getInstagramPosts = async () => {
  
  const fields = 'id,caption,media_url,media_type,permalink,timestamp,thumbnail_url'
  const accessToken = process.env.INSTAGRAM_TOKEN
  const url = `https://graph.instagram.com/v12.0/me/media?access_token=${accessToken}&fields=${fields}&limit=25`
  
  const response = await fetch(url, { method: 'GET'})
    .then(response => response.json())
  
  return response.data
}
