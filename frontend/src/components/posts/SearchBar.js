import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { initialState } from '../../modules/posts';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: '#EEEEEE',
    },
    marginLeft: 0,
    width: '1rem',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    border: '2px solid #AACCFF',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#99BBFF',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '1rem',
    [theme.breakpoints.up('sm')]: {
      width: '10rem',
      '&:focus': {
        width: '15rem',
      },
    },
  },
}));

const SearchBar = ({ onChangeSearch, posts }) => {    // module의 onChangeField 액션함수, posts 스테이트를 Container 에서 받아옴  
  const onChange = (e) => {   // onChange 이벤트 핸들러  함수
      onChangeSearch(e.target.value) // search의 값을 e.target.value로 (검색창에 써진대로)
  }
  const classes = useStyles();
  return (

        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search Tag…"
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={initialState.search}
                onChange={onChange}     // 검색창에 작성을 하면 onChange 실행
            />
        </div>
  );
};

export default SearchBar;