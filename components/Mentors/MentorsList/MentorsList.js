import React from 'react';
import {MentorsSearchBar} from "../MentorsSearchBar/MentorsSearchBar";
import {MentorCard} from "../MentorCard/MentorCard";
import './MentorList.module.scss';

export const MentorsList = ({ mentors }) => {
  
  const [data, setData] = React.useState(mentors)
  
  const containSearchWord = (value, search) => {
    const name = `${value.first_name} ${value.last_name}`.toLowerCase()
    const containTags = (value.keywords || []).some(tag => tag.toLowerCase().includes(search))
    const nickname = (value.nickname || '').toLowerCase()
    const role = (value.role || '').toLowerCase()
    
    if (containTags || name.includes(search) || nickname.includes(search) || role.includes(search)) {
      return true
    }
    
    return false;
  }
  
  const onSearch = ({ search, sort }) => {
    let newData = [...mentors];
    
    if (search) {
      newData = newData.filter(value => containSearchWord(value, search.toLowerCase()))
    }
    
    if (sort) {
      newData = newData.sort((a, b) => {
        const firstPrice = a.starting_price;
        const secondPrice = b.starting_price;
        return sort === 'ascending' ? firstPrice - secondPrice : secondPrice - firstPrice
      })
    }
   
    setData(newData)
  }
  
  return (
    <div className={'container'}>
      <MentorsSearchBar onSearch={onSearch} />
      
      <div className={'padding-top-l mentors-list'}>
        {data.map((mentor, index) => <MentorCard key={index} mentor={mentor} />)}
        
        {data.length === 0 && <div>
          We didn't found any mentors
        </div>}
      </div>
    </div>
  )
}
