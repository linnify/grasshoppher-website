import React, {useEffect} from 'react';
import styles from './MentorsSearchBar.module.scss';
import { Menu, MenuItem, withStyles} from "@material-ui/core";
import {useDebounce} from "../../../src/hooks/debounce";


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #DCDDDE',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 2,
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    width: '348px',
  },
}))(MenuItem);

export const MentorsSearchBar = (props) => {
  
  const [search, setSearch] = React.useState('');
  const [sort, setSort] = React.useState('ascending');
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const onSearchMembers = () => props.onSearch({ search, sort });
  
  useDebounce(onSearchMembers, search, 500);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const onSearch = event => setSearch(event.target.value)
  
  const onSortChanged = value => {
    setSort(value)
    props.onSearch({ sort: value })
    handleClose();
  }
  
  const sortBy = sort === 'ascending' ? 'Min > Max' : 'Min < Max';
  
  return (
    <div className={styles['mentors-bar']}>
      <div className={styles['mentors-bar__search']}>
        <img src={'/icons/search.svg'} />
        <input onChange={onSearch} placeholder={'Enter keywords like strengths or skills you’re looking for, industries, etc'}/>
      </div>
  
      <div className={styles['mentors-bar__sort']} onClick={handleClick}>
        <div>Sort by price: <span className={'primary-color'}>{sortBy}</span></div>
        <img src={'icons/arrow-down.svg'}/>
      </div>
      
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={() => onSortChanged('ascending')}>
          {'Sort ascending'}
        </StyledMenuItem>
        <StyledMenuItem onClick={() => onSortChanged('descending')}>
          {`Sort descending`}
        </StyledMenuItem>
      </StyledMenu>
    </div>
  )
}
