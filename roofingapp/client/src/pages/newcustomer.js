import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">

            <h1> Homeowner's Information</h1>
            <div>

                <TextField id="outlined-search" label="Name" type="search" variant="outlined" />

                <TextField id="outlined-search" label="Last Name" type="search" variant="outlined" />

                <TextField id="outlined-search" label="Date of Birth" type="date" input="date" variant="outlined" InputLabelProps={{ shrink: true, }} />

                <TextField id="outlined-search" label="Email" type="email" variant="outlined" />

                <TextField id="outlined-search" label="Phone" type="tel" variant="outlined" />
            </div>

            <h2>Secundary</h2>

            <div>

                <TextField id="outlined-search" label="Name" type="search" variant="outlined" />

                <TextField id="outlined-search" label="Last Name" type="search" variant="outlined" />

                <TextField id="outlined-search" label="Date of Birth" type="date" input="date" variant="outlined" InputLabelProps={{ shrink: true, }} />

                <TextField id="outlined-search" label="Email" type="email" variant="outlined" />

                <TextField id="outlined-search" label="Phone" type="tel" variant="outlined" />
            </div>

            <h2>Address</h2>

            <div>

                <TextField id="outlined-search" label="Street" type="search" variant="outlined" />

                <TextField id="outlined-search" label="city" type="search" variant="outlined" />

                <TextField id="outlined-search" label="State" type="search" input="date" variant="outlined" />

                <TextField id="outlined-search" label="Zip Code" type="tel" variant="outlined" />

                <TextField id="outlined-search" label="How many stories?" type="number" input="date" variant="outlined" InputLabelProps={{ shrink: true, }} />


            </div>

            <h2>Policy Information</h2>

            <div>

                <TextField id="outlined-search" label="Insurance Company" type="search" variant="outlined" />

                <TextField id="outlined-search" label="Policy Number" type="search" variant="outlined" />

                <TextField id="outlined-search" label="Type of Policy" type="search" input="date" variant="outlined" />

                <TextField id="outlined-search" label="Deductible" type="tel" variant="outlined" />

            </div>

        </form>
    );
};
