import styled from "styled-components"

const Section = styled("div")`
  height: 100%;
  min-height: 2000px;
  background-color: rgb(245, 245, 245);
  padding-top: 131px;
  margin: 0 auto;
  padding: 130px 48px 24px;
`
const Content = styled("div")`
  background-color: #d8d8d8;
  display: flex;
  flex-direction: column;
  max-width: 940px;
  margin: 0 auto;
  border-radius: 1px;
`
const Card = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  color: #8b8b8b;
`
const CardBox = styled("div")`
  display: flex;
  flex: 1 1;
  justify-content: center;
  background-color: rgb(245, 245, 245);
  align-items: center;
  margin: 16px;
  height: 200px;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`
const MainBox = styled("div")`
  display: flex;
  padding: 16px;
  padding-top: 0;
`
const MainBoxLeft = styled("div")`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 800px;
  margin: 16px;
  color: #8b8b8b;
  background-color: rgb(245, 245, 245);
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`
const MainBoxRight = styled("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 16px;
`
const BoxRight = styled("div")`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  color: #8b8b8b;
  background-color: rgb(245, 245, 245);
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  :first-of-type {
    margin-top: 0;
  }

  :last-of-type {
    margin-bottom: 0;
  }
`

const Body = () => (
  <Section>
    <Content>
      <Card>
        <CardBox>hello</CardBox>
        <CardBox>hello</CardBox>
        <CardBox>hello</CardBox>
      </Card>
      <MainBox>
        <MainBoxLeft>
          <div>hello</div>
        </MainBoxLeft>
        <MainBoxRight>
          <BoxRight>hello</BoxRight>
          <BoxRight>hello</BoxRight>
          <BoxRight>hello</BoxRight>
        </MainBoxRight>
      </MainBox>
    </Content>
  </Section>
)

export default Body
