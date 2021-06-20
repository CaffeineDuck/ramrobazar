import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button
} from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";

interface Props {}

const Register: React.FC<Props> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form Submitted");
          console.log(email, password);
        }}
      >
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormHelperText>Don't use a common password.</FormHelperText>
        </FormControl>
        <button>
          <Button>
          Submit
          </Button>
        </button>
      </form>
    </>
  );
};

export default Register;
