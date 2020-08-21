import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';
import axios from 'axios';


class App extends React.Component {

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& .MuiTextField-root': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
// }));

state = {
    name1:'',
    lastname1:'',
    phone1:'',
    email1:'',
    dob1:'',
    name2:'',
    lastname2:'',
    phone2:'',
    email2:'',
    dob2:'',
    street:'',
    city:'',
    state:'',
    zip:'',
    stories:'',
    inscomp:'',
    policynum:'',
    topolicy:'',
    deductible:''
}

handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
        [name]:value
    });
};

submit = (event) => {
    event.preventDefault();

    const payload =  {
    
    name1: this.state.name1,
    lastname1: this.state.lastname1,
    phone1: this.state.phone1,
    email1: this.state.email1,
    dob1: this.state.dob1,
    // name2: this.state.name2,
    // lastname2: this.state.lastname2,
    // phone2: this.state.phone2,
    // email2: this.state.email2,
    // dob2: this.state.dob2,
    // street: this.state.street,
    // city: this.state.city,
    // state: this.state.state,
    // zip: this.state.zip,
    // stories: this.state.stories,
    // inscomp: this.state.inscomp,
    // policynum: this.state.policynum,
    // topolicy: this.state.topolicy,
    // deductible: this.state.deductible
    }

    axios({
        url: '/api/save',
        method: 'POST',
        data: payload
    }).then(() => {
        console.log ('Data has been sent to the server');
    }).catch(() => {
        console.log('Internal error')
    });
    

}

render(){

    console.log('State', this.state);

// export default function FormPropsTextFields() {
//     const classes = useStyles();

    return (
        <form onSubmit={this.submit} noValidate autoComplete="off">

            <h1> Homeowner's Information</h1>
            <div>

                <TextField 
                id="outlined-search" 
                label="Name" 
                type="string" 
                variant="outlined" 
                name="name1"
                value={this.state.name1}
                onChange={this.handleChange}
                />

                <TextField id="outlined-search" 
                label="Last Name" type="search" 
                variant="outlined"
                name="lastname1"
                value={this.state.lastname1}
                onChange={this.handleChange} />

                <TextField id="outlined-search" 
                label="Date of Birth" type="date" 
                input="date" variant="outlined" 
                InputLabelProps={{ shrink: true, }}
                name="dob1"
                value={this.state.dob1}
                onChange={this.handleChange} />

                <TextField id="outlined-search" 
                label="Email"
                type="email"
                variant="outlined"
                name="email1"
                value={this.state.email1}
                onChange={this.handleChange} />

                <TextField id="outlined-search"
                label="Phone"
                type="tel" 
                variant="outlined" 
                name="phone1"
                value={this.state.phone1}
                onChange={this.handleChange}
                />
            </div>

            <h2>Secondary</h2>

            <div>

            <TextField 
                id="outlined-search" 
                label="Name" 
                type="string" 
                variant="outlined" 
                name="name2"
                value={this.state.name2}
                onChange={this.handleChange}
                />

                <TextField id="outlined-search" 
                label="Last Name" type="search" 
                variant="outlined"
                name="lastname2"
                value={this.state.lastname2}
                onChange={this.handleChange} />

                <TextField id="outlined-search" 
                label="Date of Birth" type="date" 
                input="date" variant="outlined" 
                InputLabelProps={{ shrink: true, }}
                name="dob2"
                value={this.state.dob2}
                onChange={this.handleChange} />

                <TextField id="outlined-search" 
                label="Email"
                type="email"
                variant="outlined"
                name="email2"
                value={this.state.email2}
                onChange={this.handleChange} />

                <TextField id="outlined-search"
                label="Phone"
                type="tel" 
                variant="outlined" 
                name="phone2"
                value={this.state.phone2}
                onChange={this.handleChange}
                />
               </div>

            <h2>Address</h2>

            <div>

                <TextField id="outlined-search" 
                label="Street" 
                type="search" 
                variant="outlined"
                name="street"
                value={this.state.street}
                onChange={this.handleChange} />

                <TextField id="outlined-search" 
                label="city" 
                type="search" 
                variant="outlined"
                name="city"
                value={this.state.city}
                onChange={this.handleChange} />

                <TextField id="outlined-search" 
                label="State" 
                type="search" 
                input="date" 
                variant="outlined" 
                name="state"
                value={this.state.state}
                onChange={this.handleChange}/>

                <TextField id="outlined-search" 
                label="Zip Code" 
                type="tel" 
                variant="outlined" 
                name="zip"
                value={this.state.zip}
                onChange={this.handleChange}/>

                <TextField id="outlined-search" 
                label="How many stories?" 
                type="number" 
                input="date" 
                variant="outlined" 
                InputLabelProps={{ shrink: true, }}
                name="stories"
                value={this.state.stories}
                onChange={this.handleChange} />


            </div>

            <h2>Policy Information</h2>

            <div>

                <TextField id="outlined-search" 
                label="Insurance Company" 
                type="search" variant="outlined"
                name="inscomp"
                value={this.state.inscomp}
                onChange={this.handleChange} />

                <TextField id="outlined-search"
                 label="Policy Number" 
                 type="search" 
                 variant="outlined" 
                 name="policynum"
                 value={this.state.policynum}
                 onChange={this.handleChange}/>

                <TextField id="outlined-search" 
                label="Type of Policy" 
                type="search" 
                input="date" 
                variant="outlined" 
                name="topolicy"
                value={this.state.topolicy}
                onChange={this.handleChange}/>

                <TextField id="outlined-search" 
                label="Deductible"
                 type="tel" 
                 variant="outlined" 
                 name="deductible"
                 value={this.state.deductible}
                 onChange={this.handleChange}/>

            </div>
            <div>
<Button
variant="contained"
color="primary"
size="large"
style={{marginTop: '30px'}}
// className={classes.button}
startIcon={<SaveIcon />}
>
submit
</Button>
</div>

<button>submit</button>

        </form>

    );
};
}

export default App;