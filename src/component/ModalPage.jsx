"use client";


import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

import { BiUser } from "react-icons/bi";
import { MdUpdate } from "react-icons/md";

export function ModalPage() {
  const onSubmit=()=>{
    e.preventDefault()
    const name=e.target.name.value
    const image=e.target.image.value
  }
  return (
    <Modal>
      <Button variant="secondary"><MdUpdate></MdUpdate> Update profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update User</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Image URL</Label>
                    <Input placeholder="URL" />
                  </TextField>
                   <Modal.Footer>
                 <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit">Save</Button>
              </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
           
              
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}