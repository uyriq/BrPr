import { useRef, useState } from 'react'
import {
    ActionIcon,
    Box,
    Group,
    SimpleGrid,
    Tabs,
    Text,
    Title,
    UnstyledButton,
    useMantineTheme,
    Center,
} from '@mantine/core'
import { useMediaQuery, useIntersection, useScrollIntoView } from '@mantine/hooks'
import { Plus, Minus } from 'tabler-icons-react'

export default function Home() {
    const [activeTab, setActiveTab] = useState('matrix')
    const theme = useMantineTheme()
    const largeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.xl.toFixed()}px)`)
    const columns = largeScreen ? 2 : 1
    const width = largeScreen ? '30%' : '90%'
    const padding = largeScreen ? '80vw' : '10vw'
    const style = largeScreen
        ? {
              position: 'relative',
              top: '12vh',
          }
        : {
              position: 'unset',
              width: '100%',
          }

    const { scrollIntoView: scrollIntoViewUp, targetRef: matrixRef } = useScrollIntoView({ offset: 30 })
    const { scrollIntoView: scrollIntoViewDown, targetRef: seqRef } = useScrollIntoView({ offset: 60 })

    return (
        <>
            <Box style={style}>
                {!largeScreen && (
                    <Tabs
                        value={activeTab}
                        onTabChange={setActiveTab}
                        sx={{
                            visibility: largeScreen ? 'hidden' : 'visible',
                            position: 'fixed',
                            top: '8vh',
                            left: '3vw',
                            background: 'black',
                            width: '92vw',
                            paddingRight: padding,
                        }}
                    >
                        <Tabs.List>
                            <Tabs.Tab value="matrix" onClick={() => scrollIntoViewUp({ alignment: 'center' })}>
                                matrix
                            </Tabs.Tab>
                            <Tabs.Tab value="sequences" onClick={() => scrollIntoViewDown({ alignment: 'center' })}>
                                sequences
                            </Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel value="matrix">Matrix panel</Tabs.Panel>
                        <Tabs.Panel value="sequences">Sequences panel</Tabs.Panel>
                    </Tabs>
                )}
            </Box>
            <SimpleGrid
                cols={1}
                breakpoints={[
                    { minWidth: 'xl', cols: 2 },
                    { maxWidth: 900, cols: 1 },
                ]}
            >
                <Group ref={matrixRef}>
                    1
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                    <Plus />
                </Group>
                <Group ref={seqRef}>
                    2
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                    <Minus />
                </Group>
            </SimpleGrid>
        </>
    )
}
