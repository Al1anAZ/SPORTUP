import { Text } from "../../components/ui/typography";
import { UserAvatar } from "../../components/user-avatar";
import { UserInfo } from "../../components/user-info";

export default function MyProfile() {
  return (
    <main className="flex flex-col pt-8 gap-6">
      <section className="flex flex-col items-center gap-6">
        <UserAvatar size="large" editable />
        <UserInfo />
      </section>
      <section className="flex flex-col gap-3">
         <Text.H3 className="">Order List</Text.H3>
         <div className="flex flex-col"></div>
      </section>
    </main>
  );
}
