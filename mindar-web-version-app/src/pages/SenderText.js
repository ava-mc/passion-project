import { useEffect, useState } from "react";
import StepTitle from "@/components/StepTitle";
import ArrowContainer from "@/components/ArrowContainer";
import { useRouter } from "next/router";
import styles from '@/styles/SenderText.module.css';
import Arrow from "@/components/Arrow";
import Title from "@/components/Title";

export default function SenderText() {
   const [message, setMessage] = useState('');
   const [isEmpty, setIsEmpty] = useState(false);

    const router = useRouter();
    const [params, setParams] = useState({});

    useEffect(()=> {
      if (router.isReady) {
        console.log("ready", router.query);
        setParams(router.query);
        if (router.query?.message) {
            setMessage(router.query.message);
        }
      }
    }, [router.isReady]);

    useEffect(()=> {
        if (message) {
            setIsEmpty(false);
            if (router.isReady){
              console.log(params);
              const copy = {...params}
              copy.message = message;
              setParams({...copy});
            }
        }
    }, [message]);

    
  return (
    <>
    <Title></Title>
      <div className={styles.container}>
        <StepTitle number={2} label={"Write your message"}></StepTitle>
        {isEmpty && <p>Please enter some text.</p>}
        <textarea className={styles.input}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          placeholder={'Write your message'}
        ></textarea>
        <ArrowContainer>
          <Arrow
            type="back"
            disabled={false}
            onPress={() => {
              console.log(params);
              router.push({
                pathname: "/SenderImageChoice",
                query: { ...params },
              });
            }}
          ></Arrow>
          <Arrow
            type="forward"
            disabled={false}
            onPress={() => {
              if (message) {
                console.log(params);
                router.push({
                  pathname: "/SenderResult",
                  query: { ...params },
                });
              } else {
                setIsEmpty(true);
              }
            }}
          ></Arrow>
        </ArrowContainer>
      </div>
    </>
  );
}
