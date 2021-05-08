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