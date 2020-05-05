import {connect} from "react-redux";
import Router from 'next/router';
import {setProductList, setSearchIsOpen, setSearchString} from "../../store/actions";
import {searchItems} from '../../api';
import {setSearchIsActive} from "../../store/actions/search";

const SearchForm = ({search: {string: searchText, isOpen}, setSearchIsOpen, setSearchString, setSearchIsActive}) => {
  const [state, setState] = React.useState({
    isHover: false,
    isFocus: false
  });

  const onSearch = async e => {
    e.preventDefault();
    setSearchIsActive(true);
    Router.push('/products');
  }

  const changeHandler = e => {
    setSearchString(e.target.value);
  }

  const onHoverStart = () => {
    setState({...state, isHover: true})
    setSearchIsOpen(true);
  }

  const onHoverEnd = () => {
    setState({...state, isHover: false})
    if (!state.isFocus) setSearchIsOpen(false);
  }

  const onBlur = () => {
    setState({...state, isFocus: false});
    if (!state.isHover) setSearchIsOpen(false);
  }

  return (
    <form
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onSubmit={onSearch}
      className={`search-form header__buttons_item ${isOpen && 'open'}`}>
      <input
        onFocus={() => setState({...state, isFocus: true})}
        onBlur={onBlur}
        value={searchText}
        onChange={changeHandler}
        type='text'
        className='search-form__input'/>
      <button className="">
        <img src='/img/icons/search.svg'/>
      </button>
    </form>
  )
}

const mapStateToProps = state => ({search: state.search})
const mapDispatchToProps = {
  setSearchIsOpen,
  setSearchString,
  setSearchIsActive
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
