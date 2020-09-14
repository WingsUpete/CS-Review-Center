# UML (Unified Modeling Language) [统一建模语言]

Created by *Peter S* on *2020.09.14*, last updated on *2020.09.14*

[toc]

## Modeling

Describing a system at a high level of abstraction.

### History

-   1980s
    -   The rise of OOP (Object-Oriented Programming)
    -   New class of OO modeling languages
    -   By the early 1990s, there were over 50 OO modeling languages
-   1990s
    -   Three leading OO notations decide to combine
        -   Grady Booch (BOOCH)
        -   Jim Rumbaugh (OML: Object Modeling Language)
        -   Ivar Jacobsen (OOSE: Object Oriented Software Engineering)



## UML

Unified Modeling Language (“Union of all Modeling Languages”)

-   Provides a **common**, **simple**, **graphical** representation of software design and implementation
-   Allows **developers**, **architects**, and **users** to discuss the workings of the software

In UML, there are two ways of modeling:

-   **Static Modeling**
-   **Behavioral Modeling**

---

### Static Modeling

Static Modeling captures the **fixed**, **code-level** relationships in the system

-   **[Class diagrams](#Class Diagram)** (widely used)
-   Package diagrams
-   Component diagrams
-   Composite structure diagrams
-   Deployment diagrams

---

### Behavioral Modeling

Behavioral diagrams are used to capture the dynamic execution of a system

-   **[Use case diagrams](#Use Case Diagram)** (widely used)

-   Interaction diagrams

    Focus on **communication** between elements

    -   **[Sequence diagrams](#Sequence diagram)** (widely used)
    -   Communication diagrams
    -   Interaction overview diagrams
    -   Timing diagrams

-   Collaboration diagrams

-   **[State diagrams](#State Diagram)** (widely used)

-   **Activity diagrams** (widely used)

---

### Advantages & Disadvantages

-   Advantages:
    -   A common language
    -   Visual syntax is useful
    -   To the extent UML is precise, it forces clarity
    -   Commercial tool support
-   Disadvantages:
    -   It’s a hodge podge of ideas [大杂烩]
    -   Visual syntax does not scale well
    -   Semantics is not completely clear



## Class Diagram

…



## Use Case Diagram

…



## Sequence diagram

A [sequence diagram](https://en.wikipedia.org/wiki/Sequence_diagram) shows object interactions arranged in time sequence.

It is like a table:

-   Columns: classes and/or actors
-   Rows: time steps
-   Entries show control/data flow (e.g., method invocations, important changes in state)

Each object has a dashed **lifeline** running vertically down the diagram. Objects destroyed during the time covered by the sequence are not usually drawn beyond the message that killed the objects.

---

### Frames

| Frame Operator |                           Meaning                            |
| :------------: | :----------------------------------------------------------: |
|     `alt`      | Alternative fragment for mutual exclusion conditional logic expressed in the guards |
|     `loop`     | Loop fragment while guard is true. Can also write `loop(n)` to indicate looping $n$ times. There is discussion to extend to include a FOR loop (e.g., `loop(i, 1, 10)`) |
|     `opt`      |       Optional fragment that executes if guard is true       |
|     `par`      |         Parallel fragments that execute in parallel          |
|    `region`    |     Critical region within which only one thread can run     |

---

Lucidchart Tutorial: https://www.lucidchart.com/pages/uml-sequence-diagram



## State Diagram

…



