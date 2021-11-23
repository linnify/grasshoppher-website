const datafyCMS = require('@datafycms/js-client')

export const getLastPartner = async () => {
  const response = await datafyCMS.collections('partnership')
    .fields(['partner_image.url', 'partner_logo.url', 'new_partner_description'])
    .pageSize(1)
    .list()
  
  return response.results
}



export const getPartners = async () => {
  const response = await datafyCMS.collections('partnership')
    .fields(['partner_logo.url', 'partner_summary', 'benefits_document.url'])
    .list()
  
  return response.results
}


export const getMentors = async () => {
  const response = await datafyCMS.collections('mentor')
    .fields(['id', 'nickname', 'first_name', 'last_name', 'professional_profile_image.url', 'title', 'keywords', 'starting_price', 'organization'])
    .pageSize(50)
    .list()
  return response.results;
}

export const getFrequentlyAskQuestions = async () => {
  const response = await datafyCMS.collections('faq')
    .pageSize(50)
    .list()
  return response.results;
}
