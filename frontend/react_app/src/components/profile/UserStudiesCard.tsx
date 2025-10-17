import { Accordion, AccordionItem, Button, Card, CardBody, CardFooter, CardHeader, Link } from "@heroui/react";

export interface UserStudiesCardProps {}

// Show the user information for signing up for studies
const UserStudiesCard: React.FC<UserStudiesCardProps> = ({  }) => {

    return (
        <Card className="flex w-full min-w-fit h-fit min-h-fit max-h-fit bg-content1-base border-small border-default-300 m-0 p-10 gap-8" radius="md" shadow="none">
            <CardHeader className="flex flex-col gap-3 justify-left m-0 p-0">
                <h3 className="flex w-full text-left">picoCTF User Studies</h3>
                <p>
                    Our research study seeks to understand the educational benefits of CTF competitions and challenges, as well as ways to improve them. 
                    For these purposes, data about your usage of this website and interaction with the challenges may be recorded.
                    We may also ask for your feedback and collect data from your responses.
                </p>
            </CardHeader>
            <CardBody className="flex flex-col w-full h-fit gap-2 p-0 m-0">
                <p>
                    Researchers facilitating this study may...
                </p>
                <Accordion className="p-0 m-0">
                    <AccordionItem key="1" aria-label="View platform activity data. Click to expand." title="View platform activity data">
                        Placeholder Text
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="View email address. Click to expand." title="View email addresses">
                        Placeholder Text
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="View basic demographic data. Click to expand." title="View basic demographic data">
                        Placeholder Text
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="View locational demographic data. Click to expand." title="View locational demographic data">
                        Placeholder Text
                    </AccordionItem>
                    <AccordionItem key="5" aria-label="View personal demographic data. Click to expand." title="View personal demographic data">
                        Placeholder Text
                    </AccordionItem>
                    <AccordionItem key="6" aria-label="View webshell logs. Click to expand." title="View webshell logs">
                        Placeholder Text
                    </AccordionItem>
                </Accordion>
            </CardBody>
            <CardFooter className="flex gap-8 p-0 m-0">
                <Button color="primary" size="lg" radius="sm">Provide Consent</Button>
                <Link className="flex px-6 h-full" href="/practice/learning-paths">Full Terms</Link>
            </CardFooter>
        </Card>
    );
}

export default UserStudiesCard;