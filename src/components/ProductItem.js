import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ProductItem = ({ name, price, photo }) => {
    return (
        <div style={{display:"grid", height:"160px", gridTemplateColumns:" 2fr 3fr"}}>
            <div style={{overflow:"hidden", borderRadius: "16px"}}>
                <img src={photo} alt={name} style={{height:"100%", objectFit:"cover"}} />
            </div>

            <div style={{padding:"8px 0 8px 18px", display:"grid", gridAutoColumns:"1fr 1fr 1fr", overflow:"hidden"}}>
                <h3 style={{margin:0, whiteSpace:"nowrap", textOverflow:"ellipsis"}}>{name}</h3>
                <span style={{display:"flex"}}><h2 style={{margin:0, padding:"0"}}>{price}</h2>฿</span>

                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                    <Button aria-label="delete" variant="outlined" >
                        <RemoveIcon />
                    </Button>

                    <h3 style={{margin: 0}}>1</h3>

                    <Button aria-label="delete" variant="outlined" >
                        <AddIcon />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
