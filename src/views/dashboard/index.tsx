import BaseWrapper from "comps/wrapper";
import { useAppSelector } from "redux/hooks";
import { TransInfoBox } from "../components";
import styles from "./styles.module.scss";
import { CustomSelectOptions, ISelectOption } from "components/onboard";
import { MenuSelect } from "components/menu";
import QuickActionsLinks from "./quick_actions";
import TransactionChart from "./transaction_chart";

const periods: ISelectOption[] = [
  { id: "1", value: "Last 12 months" },
  { id: "2", value: "Last 6 months" },
  { id: "3", value: "Last 3 months" },
  { id: "4", value: "Last 1 month" },
];

export default function DashboardView() {
  return (
    <BaseWrapper>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <h2>Welcome, Tolani</h2>
          <section className={styles.content_container}>
            {/* first row */}
            <div className={styles.main_view}>
              {/* column 1 */}
              <div className={styles.row_container}>
                <div className={styles.column_item}>
                  <TransInfoBox
                    periodText="in the last 7 days"
                    rateValue={25}
                    transType="Money in"
                    transAmount={"151,900.00"}
                  />
                </div>
                {/* column 2 */}
                <div className={styles.column_item}>
                  <TransInfoBox
                    periodText="in the last 7 days"
                    rateValue={-55}
                    transType="Money out"
                    transAmount={"2,000.00"}
                  />
                </div>
                {/* column 3 */}
                <div className={styles.column_item}>
                  <TransInfoBox
                    periodText=""
                    rateValue={0.0001}
                    transType="Pending"
                    transAmount={"72,000.00"}
                  />
                </div>
                {/* column 2 */}
              </div>
              <div className={styles.column_container}>
                {/* content here */}
                <div className={styles.row_container}>
                  <div className={styles.column_item}>
                    <h3 className={styles.sub_heading}>Cashflow</h3>
                    <p className={styles.hint_text}>
                      Money moving in and out of your business(including unpaid
                      invoices and bills)
                    </p>
                  </div>
                  <div style={{ width: "150px" }}>
                    <MenuSelect options={periods} showIcon />
                  </div>
                </div>
                <div className={styles.row_container}>
                  <div className={styles.column_item}>
                    <h3 className={styles.sub_heading_dark}>$570,000.00</h3>
                    <p className={styles.hint_text}>
                      Total available balance in{" "}
                      <MenuSelect
                        options={[
                          { id: 1, value: "USD" },
                          { id: 2, value: "NGN" },
                          { id: 2, value: "KES" },
                        ]}
                        transparent={true}
                        textStyle={`text-companyGreen`}
                        iconStyle={`text-companyGreen`}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.column_container}>
                <TransactionChart />
              </div>
            </div>
            {/* second row */}
            <div className={styles.side_view}>
              <div className={styles.inner_container}>
                <div className={styles.side_view_card}>
                  <h3 className={styles.header}>Quick Actions</h3>
                  <div className={styles.quick_actions_content}>
                    <QuickActionsLinks />
                  </div>
                </div>
                <div className={styles.side_view_card}>
                  <p>Card Two</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </BaseWrapper>
  );
}
