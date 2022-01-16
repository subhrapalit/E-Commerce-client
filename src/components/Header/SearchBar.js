import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const Search = styled('div')(({ theme }) => ({

    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '38%',
    display: 'flex',
    color: 'black',

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: 5,
    height: '100%',
    display: 'flex',
    color: 'blue',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    fontSize: 'unset',
    width: '100%',
    '& .MuiInputBase-input': {
        paddingLeft: 20,

    },
}));


const SearchBar = () => {
    return (
        <Search>

            <StyledInputBase
                placeholder="Search for products, brands & more..."
                inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </Search>
    );
};

export default SearchBar;