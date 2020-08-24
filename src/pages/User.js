import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Api from '../api/menu';
import {useHistory} from 'react-router-dom';
import queryString from 'querystring'

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  }
}));

const User = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [username, setUsername] = useState("")
    const parsed = queryString.parse(props.location.search.substring(1));
    const {zone, businessId} = parsed;

    useEffect(() => {

        if (!(zone && businessId)) {
            history.push("/notfound")
        }

        if (localStorage.getItem("userId")) {
            navigateToMenu()
        }
    })

    const randomName = () => {
       return `user-${Math.floor(Math.random()*10000)}`
    }

    const login = async (username) => {
        let user = await Api.addUser(username);
        localStorage.setItem("userId", user._id)
        navigateToMenu()
        setUsername("")
    }

    const loginWithName = () => {
        if (username.replace(new RegExp(' ', 'g'), '').length < 1) {
            alert("ชื่อไม่ถูกต้อง")
        }
        login(username)
    }

    const loginWithRandomName = () => {
        login(randomName())
    }

    const navigateToMenu = () => {
        history.push(`/?businessId=${businessId}&zone=${zone}`)
    }

    return (
        <Container component="main" maxWidth="xs" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                บอกชื่อให้เรารู้จักท่านมากขึ้นหน่อย
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="My Name is"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={username}
                    onChange={({target: {value}}) => setUsername(value)}
                />
                <Grid container direction="column" style={{marginTop: "12px"}} spacing={2}>
                    <Grid item>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={loginWithName}
                        >
                            เข้าสู่ระบบ
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            fullWidth
                            color="secondary"
                            className={classes.submit}
                            onClick={loginWithRandomName}
                        >
                            เข้าสู่ระบบแบบไม่บอกชื่อ
                        </Button>
                    </Grid>
                </Grid>
                </form>
            </div>
        </Container>
    );
}

export default User