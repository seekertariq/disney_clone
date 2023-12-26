import PropTypes from 'prop-types';

function HeaderItem ({name,Icon}) {
  return (
    <div className='text-white flex items-center gap-3 
    text-[15px] font-semibold cursor-pointer
    hover:underline underline-offset-8 mb-2'>
        <Icon/>
        <h2 className='text-xs md:text-lg'>{name}</h2>
    </div>
  )
}

HeaderItem.propTypes ={
    name:PropTypes.string.isRequired,
    Icon:PropTypes.string.isRequired
}

export default HeaderItem