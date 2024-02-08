import SignupForm,{Field} from "@/src/components/signupForm";
import Image from "next/image";

const fields: Field[] = [
  {
    label: 'Full Name',
    name: 'fullName',
    type: 'TEXT'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'TEXT'
  },
  {
    label: 'Gender',
    name: 'gender',
    type: 'RADIO',
    options: ['Male', 'Female', 'Other']
  }
];
const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignupForm fields={fields} />
      
    </main>
  );
}
export default Home;