import { Button, Label, Modal, Textarea, TextInput } from "flowbite-react";
import React from "react";

const TaskBoxEdit = () => {
    const TaskBoxEdit = () => {
        console.log("TaskBoxEdit");
    };
    return (
        <div>
            <Modal show={true} size="4xl">
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="flex">
                        <form>
                            <div className="">
                                <Label htmlFor="title" value="Title" />
                            </div>
                            <TextInput id="title" type="text" sizing="sm" />
                            <div className="">
                                <Label
                                    htmlFor="description"
                                    value="Description"
                                />
                            </div>
                            <Textarea id="description" type="text" />
                        </form>
                        <div></div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button>I accept</Button>
                    <Button color="gray">Decline</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TaskBoxEdit;
