import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import EmptyIcon from '../assets/icons/photoEmpty.svg';

const ProductItem = ({ name, price, photo, onRemove, onAdd, orderCount }) => {
    return (
        <div style={{display:"grid", height:"160px", gridTemplateColumns:" 2fr 3fr"}}>
            {
                photo && photo.length > 0 ?
                    <div style={{overflow:"hidden", borderRadius: "16px"}}>
                        <img src={photo + ".jpg"} alt={name} style={{height:"100%", objectFit:"cover"}} />
                    </div>
                :
                <div style={{overflow:"hidden", borderRadius: "16px", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"lightgray"}}>
                    <img src={EmptyIcon} alt={name} style={{width:"50%"}} />
                </div>
            }

            <div style={{
                padding:"8px 0 8px 18px", 
                display:"flex", 
                overflow:"hidden", 
                justifyContent:"space-between", 
                alignItems: "flex-start",
                flexDirection: "column",
            }}>
                <h3 style={{margin:0, whiteSpace:"nowrap", textOverflow:"ellipsis"}}>{name}</h3>
                <span style={{display:"flex"}}><h2 style={{margin:0, padding:"0"}}>{price}</h2>฿</span>

                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                    <Button aria-label="delete" variant="outlined" onClick={onRemove} >
                        <RemoveIcon />
                    </Button>

                    <h3 style={{margin: 0}}>{orderCount || 0}</h3>

                    <Button aria-label="delete" variant="outlined" onClick={onAdd} >
                        <AddIcon />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
