import { Flex } from "@fuel-ui/react";
import { useEffect } from "react";

import { AssetsTitle, HomeActions } from "../../components";

import { BalanceWidget, useAccounts } from "~/systems/Account";
import { AssetList } from "~/systems/Asset";
import { Layout } from "~/systems/Core";

export function Home() {
  const { isLoading, currentAccount, handlers } = useAccounts();

  useEffect(() => {
    handlers.refetch();
  }, []);

  return (
    <Layout title="Home" isLoading={isLoading}>
      <Layout.TopBar />
      <Layout.Content>
        <Flex css={{ height: "100%", flexDirection: "column" }}>
          <BalanceWidget account={currentAccount} isLoading={isLoading} />
          <HomeActions isDisabled={isLoading} />
          <AssetsTitle />
          <AssetList assets={currentAccount?.balances} isLoading={isLoading} />
        </Flex>
      </Layout.Content>
    </Layout>
  );
}