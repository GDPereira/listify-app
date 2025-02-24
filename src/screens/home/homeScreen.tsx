import { Container } from "@/src/components/container";
import { Header } from "@/src/components/header";
import { Card, Text } from "react-native-paper";

export const HomeScreen = () => {
  return (
    <Container header={<Header />}>
      <Card>
        <Card.Title titleVariant="titleLarge" title="Lorem Ipsum" />
        <Card.Content>
          <Text>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Torquent
            ridiculus accumsan amet morbi integer imperdiet auctor turpis. Diam
            rhoncus mauris primis torquent; accumsan magna tempus ipsum? Et
            tellus turpis mi inceptos blandit arcu a diam malesuada. At purus
            vulputate arcu feugiat himenaeos. Natoque nec pellentesque eget
            porta himenaeos velit. Rutrum odio pretium class risus pulvinar. Mi
            tincidunt aliquam class id, lobortis tincidunt in. Interdum vel
            lobortis facilisis condimentum ad.
          </Text>
        </Card.Content>
      </Card>
    </Container>
  );
};
