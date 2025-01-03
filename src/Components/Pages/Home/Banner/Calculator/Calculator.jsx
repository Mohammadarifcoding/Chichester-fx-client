import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CalculatorTab from "./CalculatorTab/CalculatorTab";
import CalculatorTabTwo from "./CalculatorTab/CalculatorTabTwo";
import { useQuery } from "@tanstack/react-query";
import UseAxious from "../../../../../Hook/UseAxious";

const Calculator = () => {
    const [activeTab, setActiveTab] = useState(0);
    const Axious = UseAxious();
    const { data: upsellRate = {}, refetch: upsellRefeth } = useQuery({
        queryKey: ["upselling"],
        queryFn: async () => {
            const result = await Axious.get("/upsell");
            return result.data;
        }
    });
    const [currencyData, setCurrencyData] = useState({
        value: "EUR",
        label: "Euro"
    });
    const data = [
        {
            id: 0,
            name: "Click & Collect"
        },
        {
            id: 1,
            name: "Click & Sell"
        }
    ];

    return (
        <div className="flex flex-col ">
            <Tabs>
                <TabList className="flex rounded-t-lg ">
                    {data.map((item, ind) => (
                        <Tab
                            style={{
                                borderRadius: 0 == ind ? " 8px 0 0 0 " : "0 8px 0 0 "
                            }}
                            onClick={() => {
                                setActiveTab(ind);
                            }}
                            className={`bg-white flex items-center  text-[#1E4A9A] border-none outline-none  rounded-tl-lg  sm:px-5 text-center justify-center sm:py-4 px-5 py-3 w-[50%] cursor-pointer`}
                            key={item.id}
                        >
                            {item.name}
                        </Tab>
                    ))}
                </TabList>

                <TabPanel>
                    <CalculatorTab currencyData={currencyData} setCurrencyData={setCurrencyData} item={0}></CalculatorTab>
                </TabPanel>
                <TabPanel>
                    <CalculatorTabTwo currencyData={currencyData} setCurrencyData={setCurrencyData}></CalculatorTabTwo>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Calculator;
