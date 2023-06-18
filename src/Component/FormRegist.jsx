import React from "react";
import {Button, Form, Container} from 'react-bootstrap';
import "../Style/Style.css"

class FormRegist extends React.Component {

    state = {
        nama: '',
        jurusan: '',
        gender: '',
        username: '',
        email: '',
        password: '',
        member: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
        nama: ${this.state.nama}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        username: ${this.state.username}
        email: ${this.state.email}
        password: ${this.state.password}
        member: ${this.state.member ? 'YES' : 'NO'} 
        `);
        this.setState({
            nama: '',
            jurusan: '',
            gender: '',
            username: '',
            email: '',
            password: '',
            member: false
        })
    }

    render() {
        return(
            <Container className="ContainerForm">
                <h1 className="text-center">FORM REGISTRASI</h1>
                <Form  className="FormLogin" onSubmit={this.handleSubmit}>

                     {/* Kolom Nama Lengkap */}
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Nama Lengkap</b></Form.Label>
                        <Form.Control placeholder="Nama Lengkap" name="nama" onChange={ e => this.setState({nama: e.target.value})} value={this.state.nama} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    {/* Kolom Jurusan */}
                    <Form.Label><b>Jurusan</b></Form.Label>
                    <Form.Select aria-label="Default select example" className="mb-3" name="jurusan" onChange={ e => this.setState({jurusan: e.target.value})}>
                        <option value=" ">  </option>
                        <option value="Teknik Informatika">Teknik Informatika</option>
                        <option value="Teknik Industri">Teknik Industri</option>
                        <option value="Sistem Informasi">Sistem Informasi</option>
                    </Form.Select>

                    {/* Kolom Jenis Kelamin */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Jenis Kelamin</b></Form.Label><br />
                        <Form.Check type="radio"  Label="Pria" value="Pria" inline name="gender" onChange={ e => this.setState({gender: e.target.value})}/> Pria
                        <Form.Check type="radio"  Label="Wanita" value="Wanita" className="m-3" inline name="gender" onChange={ e => this.setState({gender: e.target.value})} /> Wanita
                    </Form.Group>
                                    

                     {/* Kolom Username */}
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Username</b></Form.Label>
                        <Form.Control placeholder="Username" name="username" onChange={ e => this.setState({username: e.target.value})} value={this.state.username}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    {/* Kolom Email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Email address</b></Form.Label>
                        <Form.Control type="email" placeholder="Masukkan email" name="email" onChange={ e => this.setState({email: e.target.value})} value={this.state.email}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    {/* Kolom Password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={ e => this.setState({password: e.target.value})} value={this.state.password}/>
                    </Form.Group>

                    {/* Kolom Check Box */}
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Member" checked={this.state.member} name="member" onChange={ e => this.setState({member: e.target.checked})}/>
                    </Form.Group>

                    {/* Tombol Submit */}
                    <Button variant="primary" type="submit">
                        <b>Registrasi</b>
                    </Button>

                </Form>
            </Container>
        )
    }
}

export default FormRegist;