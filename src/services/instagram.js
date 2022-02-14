
export const getInstagramPosts = async () => {
  
  const fields = 'id,caption,media_url,media_type,permalink,timestamp,thumbnail_url'
  const accessToken = process.env.INSTAGRAM_TOKEN
  const url = `https://graph.instagram.com/v12.0/me/media?access_token=${accessToken}&fields=${fields}&limit=25`
  
  /**
   * Refresh the Instagram Access token by calling
   * https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&&access_token=<Access_token>
   * We'll receive the following data
   * {
   *     "access_token": "IGQVJYTGh2cVlULU9DRFhrNk1GQTVWUTdyTFJ6OEpXVW8xM3I1RFhKeVJIY3dFdEd5Ynd0c0llWnVxZAV9WbkQzWHZAlczFRZAHdpVVdGWlhuVDdKZAk91MWxIUVA0RTI0REtnbkR6Nld3",
   *     "token_type": "bearer",
   *     "expires_in": 5158859
   * }
   */
  
  const response = await fetch(url, { method: 'GET'})
    .then(response => response.json())
    .catch(response => console.log(response))
  
  return response.data
}
