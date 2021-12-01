import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../context/global context/GlobalState";
import {useRouter} from "next/router";
import Link from "next/link";
import {LinkButton, StyledCallback} from "../components/styles/Callback.styled";
import {StyledButton} from "../components/styles/Button.Styled";

const Callback = () => {
  const [invalidLink, setInvalidLink] = useState(false)
  const router = useRouter();
  const {code, state} = router.query
  const {signInUser, initLoading, error} = useContext(GlobalContext);

  useEffect(() => {
    setInvalidLink(false)
    if (!code || !state) {
      return setInvalidLink(true)
    }

    signInUser(state, code);
  }, [code, state])
  return (
    <StyledCallback>
      <div>
        {invalidLink ? <p>Link is invalid</p> : (
          <>
            {initLoading && 'Signing you in'}
            {error && error}
          </>
        )}
        <Link href='/' as='/'>
          <LinkButton>Go Home</LinkButton>
        </Link>
      </div>
    </StyledCallback>
  );
};

export default Callback;