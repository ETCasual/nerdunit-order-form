import { HomeLayout } from "@/modules/home/layout";
import { Button } from "@/components/Elements/Button";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import { Table } from "@/components/Elements/Table";
import { Search } from "@/components/Elements/Search";
import { FaSliders } from "react-icons/fa6";

const Visitors = () => {
  return (
    <HomeLayout>
      <section className="flex flex-grow flex-col gap-3 px-7 pb-5 pt-3">
        <div className="flex flex-row items-center justify-between">
          <Search icon={<FaSliders />} white />
          <div className="flex flex-row items-center gap-2">
            <Button label="Customers" dropdown leftIcon={IoPeopleOutline} />
            <Button label="Download" leftIcon={AiOutlineDownload} />
          </div>
        </div>
        <Table
          items={[
            {
              visitor: "Chin Jia Hao",
              company: undefined,
              code: "ET",
            },
          ]}
        />
      </section>
    </HomeLayout>
  );
};

export default Visitors;
