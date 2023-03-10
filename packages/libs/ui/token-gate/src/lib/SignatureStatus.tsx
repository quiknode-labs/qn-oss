import ConnectWalletButton from './ConnectWalletButton';
import Spinner from './icons/spinner';
import { TextBox, BoldText, RegularText } from './sharedStyles';
import { WALLET_PROVIDERS } from './types';

interface SignatureStatusProps {
  text: string;
  walletProvider: WALLET_PROVIDERS;
}

function SignatureStatus({ text, walletProvider }: SignatureStatusProps) {
  return (
    <>
      <TextBox>
        <BoldText>
          This signature will verify that you're the owner of this wallet
          address.
        </BoldText>
        <RegularText>
          You will not submit any transactions or give access to any funds by
          signing this message.
        </RegularText>
      </TextBox>
      <ConnectWalletButton
        walletName={walletProvider}
        text={text}
        RightIcon={Spinner}
        hoverable={false}
      />
    </>
  );
}

export default SignatureStatus;
