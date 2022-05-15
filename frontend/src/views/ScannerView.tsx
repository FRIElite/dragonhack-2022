import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex, Heading } from '@chakra-ui/layout';
import { AlertDialogHeader } from '@chakra-ui/modal';
import { AnyRecord } from 'dns';
import React from 'react';
import { signup } from '../services/auth.service';
import { useAppStore } from '../state/state';


export const ScannerView: React.FC<any> = () => {
  const [active, setActive] = React.useState(false);
  const [messages, setMessages] = React.useState([]);

  const handleClick = async () => {
    try {
      const ndef = new NDEFReader();
      await ndef.scan();
  
      ndef.addEventListener("readingerror", () => {
        console.log("Argh! Cannot read data from the NFC tag. Try another one?");
        alert("Argh! Cannot read data from the NFC tag. Try another one?");
      });
  
      ndef.addEventListener("reading", ({ message, serialNumber }: any) => {
        console.log(`> Serial Number: ${serialNumber}`);
        alert(`> Serial Number: ${serialNumber}`);
        console.log(`> Records: (${message.records.length})`);
      });
      setActive(true);
    } catch (error) {
      console.log("Argh! " + error);
      alert("Argh! " + error);
    }
  }

  return (
    <Flex direction="column" width="100%" height="100%" justify="space-between" align="center">
      <Flex flex="1" overflowY="auto">{messages.map((msg) => <div>{msg}</div>)}</Flex>
      <Button onClick={handleClick} disabled={active}>Scan</Button>
    </Flex>
  );
};
