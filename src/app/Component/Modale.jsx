import { MdOutlineModeEditOutline } from 'react-icons/md';
import { Button, Description, FieldError, Form, Input, Label, Modal, Spinner, Surface, TextField } from "@heroui/react";
import { FiUpload } from 'react-icons/fi';
import { authClient } from '@/lib/auth-client';
import { FaUserCog } from 'react-icons/fa';

const Modale = ({ handleEdit}) => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);
        
        
        const { data: res, error } = await authClient.updateUser({
            name: data.name,
            image: data.image,
            redirect: "/profile",
        })
        if (error) {
            alert(`${error.message}`);
        }
        alert(`Updete Successful`);
    };
    
    return (
        <Modal>
            {/* <Button variant="secondary">Open Contact Form</Button> */}
            <Button variant="secondary" onClick={handleEdit} className="btn btn-secondary">
                <MdOutlineModeEditOutline />
                Edit
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FaUserCog />
                            </Modal.Icon>
                            <Modal.Heading>Updete Profile</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                                    <TextField
                                        isRequired
                                        name="name"
                                        validate={(value) => {
                                            if (value.length < 3) {
                                                return "Name must be at least 3 characters";
                                            }
                                            return null;
                                        }}
                                    >
                                        <Label>Name</Label>
                                        <Input name="name" placeholder="Enter your name" />
                                        <FieldError />
                                    </TextField>

                                    <TextField
                                        isRequired
                                        image="img_url"
                                        validate={(value) => {
                                            if (value.length < 3) {
                                                return "Name must be at least 3 characters";
                                            }
                                            return null;
                                        }}
                                    >
                                        <Label>Image Url</Label>
                                        <Input name="img_url" placeholder="Enter your image url" />
                                        <FieldError />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">
                                            Updete
                                        </Button>
                                    </Modal.Footer>
                                    
                                </Form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default Modale;