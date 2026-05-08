import type { ExamSet } from '../types'

export const pl300: ExamSet = {
  examCode: 'PL-300',
  examName: 'Power BI Data Analyst Associate',
  description:
    'One hundred practice questions at the level of the official PL-300 exam. Prepare the data, model the data, visualise and analyse the data, and deploy and maintain assets.',
  ceCourseSlug: 'power-bi-data-analyst',
  ceCourseUrl: 'https://cloudevolvers.com/training/power-bi-data-analyst',
  ceCoursePriceCents: null,
  questions: [
    {
      id: 'pl300-1',
      topic: 'Prepare the data',
      question:
        "An analyst connects Power BI Desktop to an on-premises SQL Server database. They want the source server to perform the joins and filters whenever possible so refresh stays fast. Which Power Query feature should they verify is active?",
      options: [
        { id: 'a', text: 'Query folding.' },
        { id: 'b', text: 'Column quality profiling.' },
        { id: 'c', text: 'Incremental refresh.' },
        { id: 'd', text: 'Composite model storage mode.' },
      ],
      correctId: 'a',
      explanation:
        "Query folding pushes Power Query steps back to the source as native SQL so the database does the work. Incremental refresh controls partition reload windows but does not on its own translate steps into SQL.",
    },
    {
      id: 'pl300-2',
      topic: 'Model the data',
      question:
        "A semantic model has a Sales fact table and a Date dimension. The relationship uses OrderDate, but a report needs totals by ShipDate as well without duplicating the Date table. Which DAX function should the developer use inside a measure to activate the inactive ShipDate relationship?",
      options: [
        { id: 'a', text: 'CROSSFILTER.' },
        { id: 'b', text: 'USERELATIONSHIP.' },
        { id: 'c', text: 'TREATAS.' },
        { id: 'd', text: 'RELATED.' },
      ],
      correctId: 'b',
      explanation:
        "USERELATIONSHIP, used as a CALCULATE modifier, activates an inactive relationship for the duration of the calculation. CROSSFILTER changes filter direction or cardinality on an already active relationship.",
    },
    {
      id: 'pl300-3',
      topic: 'Visualise and analyse the data',
      question:
        "A sales manager wants a single visual that explains which factors most influence whether a customer churns and lets her select segments to drill into. Which AI visual fits best?",
      options: [
        { id: 'a', text: 'Smart narrative.' },
        { id: 'b', text: 'Decomposition tree.' },
        { id: 'c', text: 'Q&A visual.' },
        { id: 'd', text: 'Key influencers.' },
      ],
      correctId: 'd',
      explanation:
        "Key influencers ranks the factors that drive a target outcome and supports segment analysis. The decomposition tree breaks a measure down by chosen dimensions but does not surface drivers automatically.",
    },
    {
      id: 'pl300-4',
      topic: 'Deploy and maintain assets',
      question:
        "A workspace owner wants to promote content through dev, test, and production stages, with a single click to compare and deploy between stages. Which Power BI Service feature should they use?",
      options: [
        { id: 'a', text: 'Sensitivity labels.' },
        { id: 'b', text: 'Power BI Gateway clusters.' },
        { id: 'c', text: 'OneLake shortcuts.' },
        { id: 'd', text: 'Deployment pipelines.' },
      ],
      correctId: 'd',
      explanation:
        "Deployment pipelines provide three managed stages and a compare-and-deploy flow for workspaces backed by Premium or PPU. Sensitivity labels classify content but do not move it between stages.",
    },
    {
      id: 'pl300-5',
      topic: 'Model the data',
      question:
        "A measure that returns Total Sales / Total Orders sometimes errors with #DIV/0! when no orders exist for a slicer selection. Which DAX expression handles this safely without an IF wrapper?",
      options: [
        { id: 'a', text: 'IFERROR([Total Sales] / [Total Orders], 0).' },
        { id: 'b', text: 'DIVIDE([Total Sales], [Total Orders]).' },
        { id: 'c', text: 'COALESCE([Total Sales] / [Total Orders], 0).' },
        { id: 'd', text: 'SUMX(Sales, Sales[Amount] / Sales[Orders]).' },
      ],
      correctId: 'b',
      explanation:
        "DIVIDE returns BLANK by default when the denominator is zero or blank and accepts an optional alternate result. IFERROR works but is slower because it forces the engine to evaluate the error path.",
    },
    {
      id: 'pl300-6',
      topic: 'Prepare the data',
      question:
        "While previewing a column in Power Query, the analyst sees that 5% of values are errors and 12% are empty. Which Power Query view shows these percentages alongside value distribution at a glance?",
      options: [
        { id: 'a', text: 'Schema view.' },
        { id: 'b', text: 'Column quality and column distribution.' },
        { id: 'c', text: 'Diagram view.' },
        { id: 'd', text: 'Performance Analyzer.' },
      ],
      correctId: 'b',
      explanation:
        "Column quality shows valid, error, and empty percentages, and column distribution shows distinct and unique counts. Performance Analyzer measures visual render times in Power BI Desktop, not Power Query data quality.",
    },
    {
      id: 'pl300-7',
      topic: 'Visualise and analyse the data',
      question:
        "An accessibility review flags that several visuals rely on red and green to show status. What is the most direct fix that keeps the colour cue but works for colour-blind users?",
      options: [
        { id: 'a', text: 'Increase the font size on every visual.' },
        { id: 'b', text: 'Remove the colour and use only numbers.' },
        { id: 'c', text: 'Use a colour-blind safe palette and add icons or shapes that carry the same meaning.' },
        { id: 'd', text: 'Switch the report theme to high-contrast only.' },
      ],
      correctId: 'c',
      explanation:
        "Pairing colour with a non-colour signal (icon, label, shape) is the standard accessibility guidance. High-contrast mode helps low-vision users but does not solve red-green confusion.",
    },
    {
      id: 'pl300-8',
      topic: 'Deploy and maintain assets',
      question:
        "An analyst publishes a report that connects to an on-premises SQL Server. Scheduled refresh fails with a gateway error. What is the correct gateway type for production scheduled refresh of a shared dataset?",
      options: [
        { id: 'a', text: 'Personal mode gateway.' },
        { id: 'b', text: 'On-premises data gateway in standard (enterprise) mode.' },
        { id: 'c', text: 'Application Gateway.' },
        { id: 'd', text: 'Azure ExpressRoute.' },
      ],
      correctId: 'b',
      explanation:
        "The standard on-premises data gateway supports multiple users and shared datasets in production. Personal mode runs only under one user and is not recommended for shared workspace refresh.",
    },
    {
      id: 'pl300-9',
      topic: 'Model the data',
      question:
        "A developer writes [Profit] = SUM(Sales[Amount]) - SUM(Sales[Cost]). Totals look right at row level but the grand total is too high. The Sales table has a row-level discount column. Which iterator should they use to evaluate profit per row before summing?",
      options: [
        { id: 'a', text: 'SUM.' },
        { id: 'b', text: 'AVERAGEX.' },
        { id: 'c', text: 'SUMX.' },
        { id: 'd', text: 'CALCULATE.' },
      ],
      correctId: 'c',
      explanation:
        "SUMX iterates over a table and evaluates the expression in row context, then aggregates. SUM operates on a single column and cannot evaluate row-level arithmetic across columns correctly.",
    },
    {
      id: 'pl300-10',
      topic: 'Prepare the data',
      question:
        "An analyst needs to combine 12 monthly sales CSV files that share the same schema into one query. Which Power Query operation is most appropriate?",
      options: [
        { id: 'a', text: 'Append queries.' },
        { id: 'b', text: 'Merge queries.' },
        { id: 'c', text: 'Pivot column.' },
        { id: 'd', text: 'Group by.' },
      ],
      correctId: 'a',
      explanation:
        "Append stacks rows from queries with the same schema. Merge joins queries by matching columns, which is for adding columns, not adding rows.",
    },
    {
      id: 'pl300-11',
      topic: 'Visualise and analyse the data',
      question:
        "A report page has a slicer for Country and another for Region. When a user changes Country on page 1, they want the same slicer state on page 2. Which feature should the analyst configure?",
      options: [
        { id: 'a', text: 'Drillthrough.' },
        { id: 'b', text: 'Sync slicers.' },
        { id: 'c', text: 'Bookmarks.' },
        { id: 'd', text: 'Edit interactions.' },
      ],
      correctId: 'b',
      explanation:
        "Sync slicers shares slicer state across selected pages. Bookmarks capture and restore a specific page state on demand but do not propagate live filter changes.",
    },
    {
      id: 'pl300-12',
      topic: 'Deploy and maintain assets',
      question:
        "A semantic model in a Power BI Premium per User workspace must refresh hourly during business hours. Power BI Pro workspaces are limited to eight refreshes per day. What is the maximum scheduled refresh frequency available with Premium per User (PPU)?",
      options: [
        { id: 'a', text: 'Eight refreshes per day, the same as Pro.' },
        { id: 'b', text: 'One refresh per day for governance reasons.' },
        { id: 'c', text: 'Up to 48 refreshes per day.' },
        { id: 'd', text: 'Unlimited refreshes via XMLA endpoint only.' },
      ],
      correctId: 'c',
      explanation:
        "Premium per User and Premium capacities allow up to 48 scheduled refreshes per day. Pro is capped at eight.",
    },
    {
      id: 'pl300-13',
      topic: 'Model the data',
      question:
        "A snowflake design has Product, ProductSubcategory, and ProductCategory as three separate tables linked one to many. The team wants to simplify to a star schema. What is the cleanest fix?",
      options: [
        { id: 'a', text: 'Convert all three relationships to bidirectional.' },
        { id: 'b', text: 'Flatten the three tables into a single Product dimension via Power Query merges.' },
        { id: 'c', text: 'Hide the parent tables from report view.' },
        { id: 'd', text: 'Add a calculated column with PATH() in DAX.' },
      ],
      correctId: 'b',
      explanation:
        "A star schema flattens normalised parent tables into one wide dimension table, which improves DAX performance and report clarity. Hiding the tables only changes visibility, not the model shape.",
    },
    {
      id: 'pl300-14',
      topic: 'Prepare the data',
      question:
        "A data analyst wants to share a transformed Customer query across multiple Power BI reports without copying the M code into each file. Which Power BI Service feature is designed for this?",
      options: [
        { id: 'a', text: 'A composite model.' },
        { id: 'b', text: 'A bookmark.' },
        { id: 'c', text: 'A sensitivity label.' },
        { id: 'd', text: 'A dataflow.' },
      ],
      correctId: 'd',
      explanation:
        "Dataflows store reusable Power Query logic in the service so multiple datasets can consume the same prepared tables. A composite model addresses storage modes within a single dataset.",
    },
    {
      id: 'pl300-15',
      topic: 'Visualise and analyse the data',
      question:
        "A user wants to write a question in plain English and see Power BI generate a chart on the spot. Which feature delivers this?",
      options: [
        { id: 'a', text: 'Decomposition tree.' },
        { id: 'b', text: 'Q&A visual.' },
        { id: 'c', text: 'Quick measure.' },
        { id: 'd', text: 'Field parameter.' },
      ],
      correctId: 'b',
      explanation:
        "The Q&A visual interprets natural language and renders an appropriate chart. A quick measure helps generate DAX but does not parse English questions.",
    },
    {
      id: 'pl300-16',
      topic: 'Deploy and maintain assets',
      question:
        "A finance team must restrict each regional manager to seeing only rows for their own region. Which approach should the analyst implement on the dataset?",
      options: [
        { id: 'a', text: 'Object-level security on the Region table.' },
        { id: 'b', text: 'Row-level security with a role that filters by USERPRINCIPALNAME().' },
        { id: 'c', text: 'A separate workspace per region.' },
        { id: 'd', text: 'Column visibility settings in the report.' },
      ],
      correctId: 'b',
      explanation:
        "Dynamic row-level security uses USERPRINCIPALNAME() to filter rows per signed-in user. Object-level security hides whole tables or columns and does not filter rows by identity.",
    },
    {
      id: 'pl300-17',
      topic: 'Model the data',
      question:
        "A measure should always ignore any filter on Product[Color] but keep all other filters. Which filter modifier is most appropriate inside CALCULATE?",
      options: [
        { id: 'a', text: 'ALL(Product).' },
        { id: 'b', text: 'REMOVEFILTERS(Product[Color]).' },
        { id: 'c', text: 'KEEPFILTERS(Product[Color]).' },
        { id: 'd', text: 'ALLEXCEPT(Product, Product[Color]).' },
      ],
      correctId: 'b',
      explanation:
        "REMOVEFILTERS targeted at a single column clears just that filter and leaves the rest intact. ALL(Product) would clear filters on the whole Product table.",
    },
    {
      id: 'pl300-18',
      topic: 'Prepare the data',
      question:
        "An analyst loads a 2 GB SharePoint list into Power Query. Refresh takes a long time and times out. Which option is most likely to make refresh complete?",
      options: [
        { id: 'a', text: 'Switch the connector to ODBC.' },
        { id: 'b', text: 'Use incremental refresh with a Date column and configure RangeStart and RangeEnd parameters.' },
        { id: 'c', text: 'Disable the data source privacy levels.' },
        { id: 'd', text: 'Add an index column.' },
      ],
      correctId: 'b',
      explanation:
        "Incremental refresh partitions the table by date so only new or changed partitions reload. Disabling privacy levels can speed some merges but does not solve volume-driven timeouts.",
    },
    {
      id: 'pl300-19',
      topic: 'Visualise and analyse the data',
      question:
        "A report designer wants users to right-click a sales row, jump to a Customer Detail page, and see only that customer. Which feature configures this?",
      options: [
        { id: 'a', text: 'Drillthrough.' },
        { id: 'b', text: 'Drill down.' },
        { id: 'c', text: 'Tooltip page.' },
        { id: 'd', text: 'Cross-filter.' },
      ],
      correctId: 'a',
      explanation:
        "Drillthrough sends the right-clicked context as a filter to a target page. Drill down moves through hierarchy levels on the same visual.",
    },
    {
      id: 'pl300-20',
      topic: 'Deploy and maintain assets',
      question:
        "Several reports in a workspace use the same shared semantic model. The data team wants consumers to see this dataset is the official, governance-approved source. Which feature should they apply?",
      options: [
        { id: 'a', text: 'Sensitivity label of Confidential.' },
        { id: 'b', text: 'Endorsement of Certified.' },
        { id: 'c', text: 'Featured content on the home page.' },
        { id: 'd', text: 'A Pro license assignment.' },
      ],
      correctId: 'b',
      explanation:
        "Certified endorsement is the highest trust signal applied by an authorised reviewer. Sensitivity labels mark classification, which is a different concern from data trust.",
    },
    {
      id: 'pl300-21',
      topic: 'Model the data',
      question:
        "A modeler wants to rank products by total sales but reset the rank for each category. Which DAX combination is correct?",
      options: [
        { id: 'a', text: 'RANKX over ALL(Product) without any context.' },
        { id: 'b', text: 'RANKX over ALLEXCEPT(Product, Product[Category]) by [Total Sales].' },
        { id: 'c', text: 'RANK.EQ inside SUMX.' },
        { id: 'd', text: 'TOPN with descending order.' },
      ],
      correctId: 'b',
      explanation:
        "ALLEXCEPT keeps the Category filter while removing other Product filters, so RANKX numbers products inside their category. RANK.EQ is an Excel-style function not supported here.",
    },
    {
      id: 'pl300-22',
      topic: 'Prepare the data',
      question:
        "A column in Power Query contains values like ' New York '. Which set of steps is the simplest cleanup?",
      options: [
        { id: 'a', text: 'Replace values, then split column.' },
        { id: 'b', text: 'Trim and clean.' },
        { id: 'c', text: 'Pivot, then unpivot.' },
        { id: 'd', text: 'Merge, then expand.' },
      ],
      correctId: 'b',
      explanation:
        "Trim removes leading and trailing whitespace; Clean removes non-printable characters. The other options are for entirely different shape changes.",
    },
    {
      id: 'pl300-23',
      topic: 'Visualise and analyse the data',
      question:
        "A bookmark group is used to switch a single visual between a chart view and a table view. Which option must be set on the bookmark so unrelated slicer states are not overwritten?",
      options: [
        { id: 'a', text: 'Set Data to off on the bookmark.' },
        { id: 'b', text: 'Set Display to on.' },
        { id: 'c', text: 'Set Current page to off.' },
        { id: 'd', text: 'Disable Selected visuals only.' },
      ],
      correctId: 'a',
      explanation:
        "Turning Data off on the bookmark prevents it from changing slicer or filter values when applied. Display controls visibility of objects, which is a separate setting.",
    },
    {
      id: 'pl300-24',
      topic: 'Deploy and maintain assets',
      question:
        "A finance manager needs validated outputs of a dataset's RLS rules from inside the Power BI Service before the model goes to production. Which built-in feature supports this?",
      options: [
        { id: 'a', text: 'Dataset endorsement queue.' },
        { id: 'b', text: 'Sensitivity label preview.' },
        { id: 'c', text: 'Test as role in the dataset security menu.' },
        { id: 'd', text: 'Workspace audit log only.' },
      ],
      correctId: 'c',
      explanation:
        "The dataset Security menu offers a Test as role view that simulates a chosen role's filters. Sensitivity labels are about classification and have no role-test feature.",
    },
    {
      id: 'pl300-25',
      topic: 'Model the data',
      question:
        "A modeler creates a calculated column [FullName] = Customer[FirstName] & \" \" & Customer[LastName] and a measure [Customer Count] = DISTINCTCOUNT(Customer[CustomerKey]). Which statement is correct?",
      options: [
        { id: 'a', text: 'Calculated columns are evaluated at query time, measures at refresh time.' },
        { id: 'b', text: 'Calculated columns are stored in the model and computed at refresh; measures are computed at query time in filter context.' },
        { id: 'c', text: 'Measures and calculated columns behave identically.' },
        { id: 'd', text: 'Measures cannot use DISTINCTCOUNT.' },
      ],
      correctId: 'b',
      explanation:
        "Calculated columns materialise during refresh and live in the model; measures are computed each time a visual queries them, in filter context. The first statement reverses the truth.",
    },
    {
      id: 'pl300-26',
      topic: 'Prepare the data',
      question:
        "A Power Query step uses Table.NestedJoin against a SQL Server table. The analyst sees the View Native Query option is greyed out after this step. What does that indicate?",
      options: [
        { id: 'a', text: 'The query is still folding correctly.' },
        { id: 'b', text: 'Query folding has been broken at this step.' },
        { id: 'c', text: 'Query folding is impossible against SQL Server.' },
        { id: 'd', text: 'A gateway is required.' },
      ],
      correctId: 'b',
      explanation:
        "View Native Query becomes greyed out once a step prevents folding. Subsequent rows are processed locally by the Mashup engine.",
    },
    {
      id: 'pl300-27',
      topic: 'Visualise and analyse the data',
      question:
        "A heat-map style is wanted on a matrix to flag low-margin cells. Which feature applies cell colour based on a measure?",
      options: [
        { id: 'a', text: 'Tooltip page.' },
        { id: 'b', text: 'Drillthrough.' },
        { id: 'c', text: 'Conditional formatting based on a field value or rules.' },
        { id: 'd', text: 'Field parameter.' },
      ],
      correctId: 'c',
      explanation:
        "Conditional formatting can colour cells using a measure, rules, or a gradient. The other options serve navigation, hover, or visual switching.",
    },
    {
      id: 'pl300-28',
      topic: 'Deploy and maintain assets',
      question:
        "A semantic model lives in a Microsoft Fabric workspace and the team wants to query data directly from a Lakehouse without import or DirectQuery overhead. Which storage mode should the model use?",
      options: [
        { id: 'a', text: 'Import.' },
        { id: 'b', text: 'DirectQuery.' },
        { id: 'c', text: 'Direct Lake.' },
        { id: 'd', text: 'Live connection to Analysis Services.' },
      ],
      correctId: 'c',
      explanation:
        "Direct Lake reads parquet files in OneLake at query time with in-memory speed and no copy. DirectQuery sends queries to a source database, which has higher latency.",
    },
    {
      id: 'pl300-29',
      topic: 'Model the data',
      question:
        "A measure is meant to compute year-to-date sales. The model has a contiguous Date table marked as a date table. Which DAX function fits?",
      options: [
        { id: 'a', text: 'DATESYTD.' },
        { id: 'b', text: 'SAMEPERIODLASTYEAR.' },
        { id: 'c', text: 'PARALLELPERIOD.' },
        { id: 'd', text: 'CLOSINGBALANCEYEAR.' },
      ],
      correctId: 'a',
      explanation:
        "DATESYTD returns the set of dates from the start of the year up to the date in context. SAMEPERIODLASTYEAR shifts a period back by one year, which is a different calculation.",
    },
    {
      id: 'pl300-30',
      topic: 'Prepare the data',
      question:
        "An analyst wants Power Query to handle a missing source file by returning an empty table rather than failing the whole refresh. Which approach is most direct?",
      options: [
        { id: 'a', text: 'Use a calculated column instead.' },
        { id: 'b', text: 'Disable load on the query.' },
        { id: 'c', text: 'Wrap the source step with try ... otherwise returning #table.' },
        { id: 'd', text: 'Switch to DirectQuery.' },
      ],
      correctId: 'c',
      explanation:
        "try ... otherwise in M language catches the error and substitutes a fallback value or empty table. Disabling load only prevents the table from loading, which is not the same as handling errors.",
    },
    {
      id: 'pl300-31',
      topic: 'Visualise and analyse the data',
      question:
        "A report should let viewers swap between Sales, Margin, and Units in the Y axis of a single chart without cluttering the canvas. Which feature is purpose-built for this?",
      options: [
        { id: 'a', text: 'Calculation groups.' },
        { id: 'b', text: 'Bookmarks.' },
        { id: 'c', text: 'Sync slicers.' },
        { id: 'd', text: 'Field parameters.' },
      ],
      correctId: 'd',
      explanation:
        "Field parameters expose a slicer that swaps which field is bound to a visual axis. Calculation groups solve a related problem at the model layer rather than a single visual interaction.",
    },
    {
      id: 'pl300-32',
      topic: 'Deploy and maintain assets',
      question:
        "A workspace is set to Pro license mode. Users without Pro licenses cannot view the published reports. Which change makes the reports accessible to free users without buying every viewer a Pro license?",
      options: [
        { id: 'a', text: 'Move the workspace to a Premium capacity (or PPU for the authors only).' },
        { id: 'b', text: 'Change the workspace name.' },
        { id: 'c', text: 'Republish the reports as PBIT files.' },
        { id: 'd', text: 'Disable the watermark.' },
      ],
      correctId: 'a',
      explanation:
        "Premium per Capacity hosts content that users without Pro licenses can read, while authors still need PPU or Pro. PPU alone does not let free users consume content.",
    },
    {
      id: 'pl300-33',
      topic: 'Model the data',
      question:
        "An analyst writes Sales[ProductCategory] in a measure inside a Sales table context, expecting the related Product[Category] value. The expression errors. Which function is correct for navigating a many-to-one relationship in row context?",
      options: [
        { id: 'a', text: 'LOOKUPVALUE.' },
        { id: 'b', text: 'RELATED.' },
        { id: 'c', text: 'RELATEDTABLE.' },
        { id: 'd', text: 'CROSSJOIN.' },
      ],
      correctId: 'b',
      explanation:
        "RELATED follows a many-to-one relationship from the many side to the one side in row context. LOOKUPVALUE works without a relationship but is slower and unnecessary when one exists.",
    },
    {
      id: 'pl300-34',
      topic: 'Prepare the data',
      question:
        "An analyst connects to a REST API that returns paginated JSON. Which Power Query approach handles paging cleanly?",
      options: [
        { id: 'a', text: 'A calculated table in DAX.' },
        { id: 'b', text: 'Manual append for each page.' },
        { id: 'c', text: 'A custom function invoked over a list of page numbers, then List.Combine the results.' },
        { id: 'd', text: 'Parameters with no function.' },
      ],
      correctId: 'c',
      explanation:
        "A custom M function called over a list of page numbers is the standard pattern. Manual append per page is fragile and does not scale.",
    },
    {
      id: 'pl300-35',
      topic: 'Visualise and analyse the data',
      question:
        "A report designer wants users to hover a column on a chart and see a small page of supporting context. Which Power BI feature delivers this?",
      options: [
        { id: 'a', text: 'Drillthrough.' },
        { id: 'b', text: 'Bookmark.' },
        { id: 'c', text: 'Report page tooltip.' },
        { id: 'd', text: 'Slicer panel.' },
      ],
      correctId: 'c',
      explanation:
        "Report page tooltips render an entire page as a hover popup, scoped to the hovered point. Drillthrough is a click action to a separate page.",
    },
    {
      id: 'pl300-36',
      topic: 'Deploy and maintain assets',
      question:
        "An organisation needs reports labelled and protected as Confidential, with policy enforcement when users export to Excel. Which feature integrates with Microsoft Purview to do this?",
      options: [
        { id: 'a', text: 'Workspace roles.' },
        { id: 'b', text: 'Sensitivity labels.' },
        { id: 'c', text: 'Dataset endorsements.' },
        { id: 'd', text: 'Deployment pipelines.' },
      ],
      correctId: 'b',
      explanation:
        "Sensitivity labels carry classification and policy from Purview into Power BI and follow exports. Endorsements signal trust but do not enforce protection.",
    },
    {
      id: 'pl300-37',
      topic: 'Model the data',
      question:
        "A modeler enables bidirectional filtering between Sales and a generic Date table to make a slicer on Date filter another fact table. Which side effect is the most likely concern?",
      options: [
        { id: 'a', text: 'Increased model file size.' },
        { id: 'b', text: 'Ambiguous filter paths and unexpected filter propagation.' },
        { id: 'c', text: 'Loss of relationships at refresh.' },
        { id: 'd', text: 'Inability to publish to the service.' },
      ],
      correctId: 'b',
      explanation:
        "Bidirectional filters can create ambiguity and let filters travel through the dimension to other facts in surprising ways. The recommended fix is single-direction relationships and DAX such as TREATAS where needed.",
    },
    {
      id: 'pl300-38',
      topic: 'Prepare the data',
      question:
        "An analyst wants to parameterise a server name so the same query points to dev or prod by switching one value. Which Power Query feature is intended for this?",
      options: [
        { id: 'a', text: 'Parameters.' },
        { id: 'b', text: 'Custom columns.' },
        { id: 'c', text: 'Conditional columns.' },
        { id: 'd', text: 'Append queries.' },
      ],
      correctId: 'a',
      explanation:
        "Parameters store named, typed values that steps can reference, including data source names. Custom columns are for per-row formulas, not source switching.",
    },
    {
      id: 'pl300-39',
      topic: 'Visualise and analyse the data',
      question:
        "A line chart shows monthly revenue. The user wants Power BI to suggest which factors most explain why revenue dropped between two specific months. Which feature provides this insight?",
      options: [
        { id: 'a', text: 'Smart narrative.' },
        { id: 'b', text: 'Analyze increase or decrease (point insights).' },
        { id: 'c', text: 'Q&A visual.' },
        { id: 'd', text: 'Field parameter.' },
      ],
      correctId: 'b',
      explanation:
        "The Analyze (Explain the increase / Find where this is different) feature on time-series visuals returns automated explanatory insights. Smart narrative writes prose summaries but does not pinpoint contributors to a specific drop.",
    },
    {
      id: 'pl300-40',
      topic: 'Deploy and maintain assets',
      question:
        "A team uses deployment pipelines but also wants to compare metadata of two semantic models, write back changes, and inspect partitions. Which external tool complements Power BI for this task?",
      options: [
        { id: 'a', text: 'Power Automate.' },
        { id: 'b', text: 'DAX Studio only.' },
        { id: 'c', text: 'ALM Toolkit.' },
        { id: 'd', text: 'Microsoft Purview.' },
      ],
      correctId: 'c',
      explanation:
        "ALM Toolkit performs schema compare and selective deploy against tabular models. DAX Studio is excellent for query and performance tuning but is not a metadata diff tool.",
    },
    {
      id: 'pl300-41',
      topic: 'Model the data',
      question:
        "A measure must keep the existing filter on Product[Color] but also add a filter for Product[Size] = \"L\". Which CALCULATE modifier preserves existing filters on the same column when adding new ones?",
      options: [
        { id: 'a', text: 'REMOVEFILTERS.' },
        { id: 'b', text: 'KEEPFILTERS.' },
        { id: 'c', text: 'ALLEXCEPT.' },
        { id: 'd', text: 'ALL.' },
      ],
      correctId: 'b',
      explanation:
        "KEEPFILTERS adds a filter to the existing context rather than overwriting it. The other modifiers remove or expand context, which is the opposite intent.",
    },
    {
      id: 'pl300-42',
      topic: 'Prepare the data',
      question:
        "A monthly file has months pivoted as columns (Jan, Feb, ...). To model the data properly, the analyst needs one row per (date, value). Which Power Query operation is correct?",
      options: [
        { id: 'a', text: 'Pivot column.' },
        { id: 'b', text: 'Unpivot columns.' },
        { id: 'c', text: 'Group by.' },
        { id: 'd', text: 'Transpose.' },
      ],
      correctId: 'b',
      explanation:
        "Unpivot turns columns into rows of attribute and value, which is the canonical fact-table shape. Transpose flips rows and columns and rarely produces the desired result.",
    },
    {
      id: 'pl300-43',
      topic: 'Visualise and analyse the data',
      question:
        "A scorecard report needs to show actual versus target with an at-a-glance arrow. Which built-in visual fits and is supported across mobile?",
      options: [
        { id: 'a', text: 'KPI visual.' },
        { id: 'b', text: 'Stacked area chart.' },
        { id: 'c', text: 'Treemap.' },
        { id: 'd', text: 'Funnel.' },
      ],
      correctId: 'a',
      explanation:
        "The KPI visual shows indicator, target, and trend with built-in colour cues. Treemaps and funnels do not represent target attainment cleanly.",
    },
    {
      id: 'pl300-44',
      topic: 'Deploy and maintain assets',
      question:
        "A developer wants to share a packaged set of dashboards and reports with the wider organisation, with a managed audience and a navigation pane. Which Power BI artifact fits?",
      options: [
        { id: 'a', text: 'A scorecard.' },
        { id: 'b', text: 'A workspace shared by direct access.' },
        { id: 'c', text: 'A Power BI app.' },
        { id: 'd', text: 'A dataflow.' },
      ],
      correctId: 'c',
      explanation:
        "Apps publish curated workspace content with audiences and a navigation pane. Sharing a workspace directly works but lacks app-level audience management.",
    },
    {
      id: 'pl300-45',
      topic: 'Model the data',
      question:
        "A measure should compute a running total of sales by date that resets at the start of each year. Which DAX pattern is most appropriate?",
      options: [
        { id: 'a', text: 'CALCULATE([Total Sales], FILTER(ALL(Date), Date[Date] <= MAX(Date[Date]))).' },
        { id: 'b', text: 'CALCULATE([Total Sales], DATESBETWEEN(Date[Date], MIN(Date[Date]), MAX(Date[Date]))).' },
        { id: 'c', text: 'CALCULATE([Total Sales], DATESYTD(Date[Date])).' },
        { id: 'd', text: '[Total Sales] / DISTINCTCOUNT(Date[Year]).' },
      ],
      correctId: 'c',
      explanation:
        "DATESYTD produces a year-to-date set that resets at the year boundary. The FILTER ALL pattern computes a running total that does not reset by year.",
    },
    {
      id: 'pl300-46',
      topic: 'Prepare the data',
      question:
        "A column contains \"2026-05-08T14:32:00Z\". The analyst wants only the date part as a Date type. Which approach is preferred?",
      options: [
        { id: 'a', text: 'Use a calculated column in DAX.' },
        { id: 'b', text: 'Replace all letters with empty strings.' },
        { id: 'c', text: 'Change the column type to Date directly, picking the locale used by the source.' },
        { id: 'd', text: 'Pivot the column.' },
      ],
      correctId: 'c',
      explanation:
        "Change Type with Locale lets Power Query parse the ISO datetime into the right type without string surgery. Replacing letters is fragile and discards timezone information.",
    },
    {
      id: 'pl300-47',
      topic: 'Visualise and analyse the data',
      question:
        "A report has many small visuals on one page and feels cluttered. Which best practice should the analyst apply?",
      options: [
        { id: 'a', text: 'Use grid alignment, consistent gutters, and reduce the number of visuals per page.' },
        { id: 'b', text: 'Add more colours to differentiate visuals.' },
        { id: 'c', text: 'Switch every visual to 3D.' },
        { id: 'd', text: 'Remove all titles.' },
      ],
      correctId: 'a',
      explanation:
        "Layout consistency and fewer, larger visuals improve clarity. 3D and extra colour usually make charts harder to read.",
    },
    {
      id: 'pl300-48',
      topic: 'Deploy and maintain assets',
      question:
        "A semantic model's RLS rules must apply to users who view a report through a Power BI app. The publisher is a member of the workspace Admin role. Which behaviour applies to the publisher?",
      options: [
        { id: 'a', text: 'Workspace admins are always exempt from RLS regardless of how they view the report.' },
        { id: 'b', text: 'RLS applies to users who consume the dataset and have Build access only; admins viewing through the app see all data.' },
        { id: 'c', text: 'RLS applies based on the role membership in the dataset, not on workspace role.' },
        { id: 'd', text: 'RLS only applies to mobile clients.' },
      ],
      correctId: 'c',
      explanation:
        "RLS filters rows based on the user's mapping to a dataset role; workspace role does not bypass RLS. Workspace admins still need to be added to the role to be filtered.",
    },
    {
      id: 'pl300-49',
      topic: 'Model the data',
      question:
        "A modeler wants to apply different time-aggregation views (YTD, MTD, Prior Year) to many measures without writing each variant by hand. Which feature is designed for this?",
      options: [
        { id: 'a', text: 'Quick measures.' },
        { id: 'b', text: 'Field parameters.' },
        { id: 'c', text: 'Calculated tables.' },
        { id: 'd', text: 'Calculation groups.' },
      ],
      correctId: 'd',
      explanation:
        "Calculation groups define reusable time intelligence calculation items applied to any measure. Field parameters swap fields, not calculations.",
    },
    {
      id: 'pl300-50',
      topic: 'Prepare the data',
      question:
        "An analyst joins Customer with Orders in Power Query. They expect inner join behaviour and only matching rows. Which Join Kind setting fits?",
      options: [
        { id: 'a', text: 'Left outer.' },
        { id: 'b', text: 'Right outer.' },
        { id: 'c', text: 'Inner.' },
        { id: 'd', text: 'Full outer.' },
      ],
      correctId: 'c',
      explanation:
        "Inner join keeps only rows that match in both tables. Left outer keeps unmatched left rows too.",
    },
    {
      id: 'pl300-51',
      topic: 'Visualise and analyse the data',
      question:
        "A line chart shows daily revenue with one outlier that distorts the y-axis. The analyst wants the chart to scale to the typical range while still showing the outlier. Which feature helps?",
      options: [
        { id: 'a', text: 'Use a 3D effect.' },
        { id: 'b', text: 'Remove the outlier from the dataset.' },
        { id: 'c', text: 'Set a custom y-axis range and let the data point overflow visibly with a label.' },
        { id: 'd', text: 'Apply a rainbow palette.' },
      ],
      correctId: 'c',
      explanation:
        "A fixed y-axis range with a clear label preserves the outlier visually while keeping the rest readable. Removing the outlier hides real data.",
    },
    {
      id: 'pl300-52',
      topic: 'Deploy and maintain assets',
      question:
        "An organisation wants to monitor dataset refresh failures across many workspaces. Which built-in option provides this view to administrators?",
      options: [
        { id: 'a', text: 'Admin portal usage metrics and refresh history APIs.' },
        { id: 'b', text: 'Power BI Desktop only.' },
        { id: 'c', text: 'Sensitivity labels report.' },
        { id: 'd', text: 'Bookmarks pane.' },
      ],
      correctId: 'a',
      explanation:
        "The Power BI Service admin portal exposes activity, capacity, and refresh telemetry, and the REST APIs expose refresh history. Sensitivity label reports cover classification, not refresh state.",
    },
    {
      id: 'pl300-53',
      topic: 'Model the data',
      question:
        "A modeler is calculating sales for the same month last year. The Date table is contiguous and marked as a date table. Which DAX function is the simplest fit?",
      options: [
        { id: 'a', text: 'DATEADD(Date[Date], -1, YEAR).' },
        { id: 'b', text: 'PARALLELPERIOD(Date[Date], -12, MONTH).' },
        { id: 'c', text: 'SAMEPERIODLASTYEAR(Date[Date]).' },
        { id: 'd', text: 'PREVIOUSYEAR(Date[Date]).' },
      ],
      correctId: 'c',
      explanation:
        "SAMEPERIODLASTYEAR shifts the current period exactly one year back. PREVIOUSYEAR returns the entire prior year regardless of current granularity.",
    },
    {
      id: 'pl300-54',
      topic: 'Prepare the data',
      question:
        "An analyst is told a column should never contain NULL. Which Power Query approach is best to surface offending rows during refresh review?",
      options: [
        { id: 'a', text: 'Filter null rows out silently.' },
        { id: 'b', text: 'Use Keep Errors plus a step that converts null to error in that column.' },
        { id: 'c', text: 'Disable load on the query.' },
        { id: 'd', text: 'Switch the column to Decimal.' },
      ],
      correctId: 'b',
      explanation:
        "Forcing nulls into errors and using Keep Errors gives the analyst a query of bad rows for review. Silent filtering hides data quality problems.",
    },
    {
      id: 'pl300-55',
      topic: 'Visualise and analyse the data',
      question:
        "A user wants a single visual that shows hierarchical contribution to a measure and lets them choose how to break it down on the fly with AI suggestions. Which AI visual fits?",
      options: [
        { id: 'a', text: 'Decomposition tree.' },
        { id: 'b', text: 'Q&A visual.' },
        { id: 'c', text: 'Smart narrative.' },
        { id: 'd', text: 'Key influencers.' },
      ],
      correctId: 'a',
      explanation:
        "The decomposition tree breaks a measure down by chosen or AI-suggested dimensions interactively. Key influencers ranks drivers but does not break a number down hierarchically.",
    },
    {
      id: 'pl300-56',
      topic: 'Deploy and maintain assets',
      question:
        "Workspace governance requires that only certain users can publish reports while others can view and share. Which workspace role grants publish rights but not full admin?",
      options: [
        { id: 'a', text: 'Admin.' },
        { id: 'b', text: 'Member.' },
        { id: 'c', text: 'Contributor.' },
        { id: 'd', text: 'Viewer.' },
      ],
      correctId: 'c',
      explanation:
        "Contributor can publish and edit content but cannot manage workspace settings or membership. Viewer cannot publish.",
    },
    {
      id: 'pl300-57',
      topic: 'Model the data',
      question:
        "A modeler defines [Sales LY] = CALCULATE([Total Sales], SAMEPERIODLASTYEAR(Date[Date])). They notice the value is blank for 2020 even though there is 2019 data, but only when a slicer on Date[Year] is set. Which is the most likely cause?",
      options: [
        { id: 'a', text: 'The Date table is not contiguous.' },
        { id: 'b', text: 'A slicer that filters Date[Year] removes the prior year from the filter context.' },
        { id: 'c', text: 'Sales table is empty.' },
        { id: 'd', text: 'USERELATIONSHIP is not used.' },
      ],
      correctId: 'b',
      explanation:
        "A Year slicer filters the Date table to the selected year, so SAMEPERIODLASTYEAR has no dates to shift back into. Wrapping the slicer expression with REMOVEFILTERS or using a dedicated calculation item is the fix.",
    },
    {
      id: 'pl300-58',
      topic: 'Prepare the data',
      question:
        "An analyst wants to use a Power Query function that fetches data from a public web API once per workspace per day, then have datasets reuse the prepared output. Which feature is purpose-built?",
      options: [
        { id: 'a', text: 'A field parameter.' },
        { id: 'b', text: 'A bookmark.' },
        { id: 'c', text: 'A dataflow with scheduled refresh.' },
        { id: 'd', text: 'A measure.' },
      ],
      correctId: 'c',
      explanation:
        "A dataflow schedules the refresh of a Power Query result in the service so multiple datasets share it. Bookmarks and field parameters are visual features unrelated to data ingestion.",
    },
    {
      id: 'pl300-59',
      topic: 'Visualise and analyse the data',
      question:
        "A user wants the report to read aloud the key takeaways for the current selection. Which feature fits?",
      options: [
        { id: 'a', text: 'Smart narrative.' },
        { id: 'b', text: 'Key influencers.' },
        { id: 'c', text: 'Drillthrough.' },
        { id: 'd', text: 'Tooltip page.' },
      ],
      correctId: 'a',
      explanation:
        "Smart narrative generates dynamic text summaries that a screen reader can announce. Key influencers ranks drivers but does not produce a textual summary by default.",
    },
    {
      id: 'pl300-60',
      topic: 'Deploy and maintain assets',
      question:
        "Across dev, test, and prod stages of a deployment pipeline, the analyst wants the test stage to point to a different SQL Server. Which feature handles this without re-importing the report?",
      options: [
        { id: 'a', text: 'Workspace renames.' },
        { id: 'b', text: 'Sensitivity labels.' },
        { id: 'c', text: 'Dataset parameters with parameter rules in deployment pipelines.' },
        { id: 'd', text: 'Dataset endorsements.' },
      ],
      correctId: 'c',
      explanation:
        "Pipeline rules can override a parameter value per stage so the same dataset connects to a different server. Sensitivity labels and endorsements have nothing to do with connection settings.",
    },
    {
      id: 'pl300-61',
      topic: 'Model the data',
      question:
        "A measure should compute the average of monthly sales totals over a year. Which DAX expression fits?",
      options: [
        { id: 'a', text: 'AVERAGE(Sales[Amount]).' },
        { id: 'b', text: 'AVERAGEX(VALUES(Date[YearMonth]), [Total Sales]).' },
        { id: 'c', text: 'SUM(Sales[Amount]) / 12.' },
        { id: 'd', text: 'CALCULATE(AVERAGE(Sales[Amount]), ALL(Date)).' },
      ],
      correctId: 'b',
      explanation:
        "AVERAGEX iterates each YearMonth value and averages the resulting [Total Sales] values. Dividing by 12 fails for partial years and other periods.",
    },
    {
      id: 'pl300-62',
      topic: 'Prepare the data',
      question:
        "Source data for an order-line table is updated daily and the analyst wants only the last 24 months in the published model, with new days reloaded each refresh. Which capability fits?",
      options: [
        { id: 'a', text: 'Drillthrough.' },
        { id: 'b', text: 'Bookmarks.' },
        { id: 'c', text: 'Incremental refresh policy with RangeStart and RangeEnd parameters.' },
        { id: 'd', text: 'A composite model.' },
      ],
      correctId: 'c',
      explanation:
        "Incremental refresh with RangeStart and RangeEnd parameters partitions historical data and reloads only new windows. Composite models address mixed storage modes, not partitioned reload.",
    },
    {
      id: 'pl300-63',
      topic: 'Visualise and analyse the data',
      question:
        "On a clustered column chart, hovering shows only the value of the column. The analyst wants the tooltip to also show last year's value. Which option is simplest?",
      options: [
        { id: 'a', text: 'Add a measure to the visual Tooltips bucket.' },
        { id: 'b', text: 'Apply a bookmark.' },
        { id: 'c', text: 'Use a custom theme.' },
        { id: 'd', text: 'Edit the report background.' },
      ],
      correctId: 'a',
      explanation:
        "Adding measures to the Tooltips bucket displays them on hover. Bookmarks and themes do not change tooltip contents.",
    },
    {
      id: 'pl300-64',
      topic: 'Deploy and maintain assets',
      question:
        "An admin needs to retire a dataset that is referenced by several reports. Which step happens first to avoid breaking those reports?",
      options: [
        { id: 'a', text: 'Change the dataset to DirectQuery.' },
        { id: 'b', text: 'Delete the dataset immediately.' },
        { id: 'c', text: 'Identify downstream reports via dataset lineage view and notify owners.' },
        { id: 'd', text: 'Change the workspace name.' },
      ],
      correctId: 'c',
      explanation:
        "The lineage view shows downstream dependents so owners can be informed before retirement. Deleting first breaks consumers without notice.",
    },
    {
      id: 'pl300-65',
      topic: 'Model the data',
      question:
        "Sales fact table has 50 million rows and runs slowly for high-grain visuals. The team wants a fast pre-aggregated table to back high-grain visuals while keeping detail for drill-down. Which feature fits?",
      options: [
        { id: 'a', text: 'Bookmarks.' },
        { id: 'b', text: 'Sensitivity labels.' },
        { id: 'c', text: 'User-defined aggregations.' },
        { id: 'd', text: 'Q&A linguistic schema.' },
      ],
      correctId: 'c',
      explanation:
        "Aggregations let the engine answer summary queries from a small in-memory or DirectQuery aggregation table and fall back to the detail table for drill-down. The other options are unrelated.",
    },
    {
      id: 'pl300-66',
      topic: 'Prepare the data',
      question:
        "A fact-table column should always be Whole Number, but the source sometimes returns text like \"N/A\". The analyst wants Power Query to turn \"N/A\" into null and then convert to integer. Which two steps are needed?",
      options: [
        { id: 'a', text: 'Group by then transpose.' },
        { id: 'b', text: 'Pivot the column, then unpivot it.' },
        { id: 'c', text: 'Replace "N/A" with null, then change type to Whole Number.' },
        { id: 'd', text: 'Append, then merge.' },
      ],
      correctId: 'c',
      explanation:
        "Replace Values turns \"N/A\" into null, then Change Type produces nullable integers. The other operations reshape rows and columns and do nothing for type cleanup.",
    },
    {
      id: 'pl300-67',
      topic: 'Visualise and analyse the data',
      question:
        "A theme file is needed to apply a corporate palette and font to every visual. Which file format does Power BI Desktop support for full themes?",
      options: [
        { id: 'a', text: 'A DAX expression.' },
        { id: 'b', text: 'A CSV file.' },
        { id: 'c', text: 'A PowerPoint template.' },
        { id: 'd', text: 'A JSON theme file.' },
      ],
      correctId: 'd',
      explanation:
        "Power BI themes are JSON files that drive colours, fonts, and visual defaults. The other formats are not theme inputs.",
    },
    {
      id: 'pl300-68',
      topic: 'Deploy and maintain assets',
      question:
        "Users complain a published dashboard tile shows stale data even though the underlying dataset refreshed. Which is the most direct explanation?",
      options: [
        { id: 'a', text: 'Dashboard tiles cache visuals; the cache updates after a tile re-render or scheduled cache refresh.' },
        { id: 'b', text: 'Dashboards never connect to refreshed data.' },
        { id: 'c', text: 'Sensitivity labels delay refresh.' },
        { id: 'd', text: 'RLS overrides the dataset refresh.' },
      ],
      correctId: 'a',
      explanation:
        "Dashboard tiles render against a cached snapshot of the dataset query and refresh on their own schedule. RLS and sensitivity labels do not delay refresh.",
    },
    {
      id: 'pl300-69',
      topic: 'Model the data',
      question:
        "A modeler wants a measure that returns total sales but ignores any filter on the entire Sales table itself. Which expression is correct?",
      options: [
        { id: 'a', text: 'SUM(Sales[Amount]) + CALCULATE(SUM(Sales[Amount]), VALUES(Sales[OrderID])).' },
        { id: 'b', text: 'CALCULATE(SUM(Sales[Amount]), KEEPFILTERS(Sales)).' },
        { id: 'c', text: 'CALCULATE(SUM(Sales[Amount]), ALL(Sales)).' },
        { id: 'd', text: 'SUMX(VALUES(Sales[OrderID]), Sales[Amount]).' },
      ],
      correctId: 'c',
      explanation:
        "ALL(Sales) removes filters from the Sales table so SUM returns the total over the full table. KEEPFILTERS adds rather than removes filters.",
    },
    {
      id: 'pl300-70',
      topic: 'Prepare the data',
      question:
        "An analyst needs to mask customer email addresses before publishing. Which Power Query approach is most maintainable?",
      options: [
        { id: 'a', text: 'Use a dataset endorsement.' },
        { id: 'b', text: 'Remove the column entirely from the model.' },
        { id: 'c', text: 'Apply conditional formatting in the report.' },
        { id: 'd', text: 'A custom column with a hashing function applied to the email.' },
      ],
      correctId: 'd',
      explanation:
        "Hashing in Power Query masks values consistently while keeping the column usable as a join key. Removing the column loses analytic value, and conditional formatting does not mask source data.",
    },
    {
      id: 'pl300-71',
      topic: 'Visualise and analyse the data',
      question:
        "A bar chart compares sales across 30 categories. The chart is unreadable. Which fix is the most effective without losing information?",
      options: [
        { id: 'a', text: 'Reduce the font size to 6.' },
        { id: 'b', text: 'Switch to a 3D pie chart.' },
        { id: 'c', text: 'Remove all category labels.' },
        { id: 'd', text: 'Use TOPN ranking with an Other bucket and add a scrollbar for the rest.' },
      ],
      correctId: 'd',
      explanation:
        "Top-N plus Other and a scroll keeps focus on the leaders while still letting users see the rest. Pie charts are worse for many categories.",
    },
    {
      id: 'pl300-72',
      topic: 'Deploy and maintain assets',
      question:
        "A semantic model has 100 GB of data and DirectQuery latency is too high for a Sales Manager report. The team wants in-memory speed without copying the data outside Fabric. Which option fits in a Fabric workspace backed by F64 capacity?",
      options: [
        { id: 'a', text: 'Switch the model to Direct Lake mode against the Lakehouse.' },
        { id: 'b', text: 'Use Personal gateway.' },
        { id: 'c', text: 'Disable RLS.' },
        { id: 'd', text: 'Convert to a paginated report.' },
      ],
      correctId: 'a',
      explanation:
        "Direct Lake reads OneLake parquet files at near-import speed without duplicating data. Personal gateway and RLS toggles do not address performance for Fabric Lakehouse data.",
    },
    {
      id: 'pl300-73',
      topic: 'Model the data',
      question:
        "A Date table needs to support fiscal calendars starting in July. Which approach is best?",
      options: [
        { id: 'a', text: 'Use a calculated column with USERELATIONSHIP.' },
        { id: 'b', text: 'Use only DAX time intelligence functions.' },
        { id: 'c', text: 'Split the model into two semantic models.' },
        { id: 'd', text: 'Add fiscal columns (FY, FQ, Fiscal Month Sort) to the Date table and sort visuals using these columns.' },
      ],
      correctId: 'd',
      explanation:
        "A Date table with fiscal columns and explicit sort columns supports fiscal hierarchies and slicers. Time intelligence functions still need a properly modelled date table.",
    },
    {
      id: 'pl300-74',
      topic: 'Prepare the data',
      question:
        "A query connects to Excel where the first three rows are titles and merged cells. The analyst wants to skip them and use row 4 as headers. Which step fits?",
      options: [
        { id: 'a', text: 'Transpose.' },
        { id: 'b', text: 'Pivot column.' },
        { id: 'c', text: 'Group by.' },
        { id: 'd', text: 'Remove top rows, then Use first row as headers.' },
      ],
      correctId: 'd',
      explanation:
        "Removing the title rows, then promoting the next row to headers, gives a clean schema. The other options reshape data in unrelated ways.",
    },
    {
      id: 'pl300-75',
      topic: 'Visualise and analyse the data',
      question:
        "A page is designed for a phone. Power BI Service shows the page in a portrait phone view. Which Power BI Desktop feature creates that phone-optimised layout?",
      options: [
        { id: 'a', text: 'Theme editor.' },
        { id: 'b', text: 'Bookmarks.' },
        { id: 'c', text: 'Q&A.' },
        { id: 'd', text: 'Mobile layout view.' },
      ],
      correctId: 'd',
      explanation:
        "Mobile layout view in Power BI Desktop arranges visuals for phones. Bookmarks and themes are about state and styling, not phone layouts.",
    },
    {
      id: 'pl300-76',
      topic: 'Deploy and maintain assets',
      question:
        "A workspace is connected to a deployment pipeline. Which artifact types are included when content moves from dev to test?",
      options: [
        { id: 'a', text: 'Reports, semantic models, dataflows, paginated reports, and dashboards.' },
        { id: 'b', text: 'Only reports.' },
        { id: 'c', text: 'Only datasets.' },
        { id: 'd', text: 'Only dashboards.' },
      ],
      correctId: 'a',
      explanation:
        "Pipelines move all supported workspace items together with parameter rules where set. Single-type movement is not how pipelines operate.",
    },
    {
      id: 'pl300-77',
      topic: 'Model the data',
      question:
        "A measure should compute Sales for the last 30 days from the latest date in context. Which DAX uses DATEADD correctly?",
      options: [
        { id: 'a', text: 'CALCULATE([Total Sales], SAMEPERIODLASTYEAR(Date[Date])).' },
        { id: 'b', text: 'CALCULATE([Total Sales], DATEADD(Date[Date], -30, MONTH)).' },
        { id: 'c', text: 'CALCULATE([Total Sales], DATESYTD(Date[Date])).' },
        { id: 'd', text: 'CALCULATE([Total Sales], DATESINPERIOD(Date[Date], MAX(Date[Date]), -30, DAY)).' },
      ],
      correctId: 'd',
      explanation:
        "DATESINPERIOD returns a contiguous date range relative to a reference date with a chosen interval and unit. DATEADD shifts the period instead of widening it.",
    },
    {
      id: 'pl300-78',
      topic: 'Prepare the data',
      question:
        "A Power Query column has dates stored as text \"08/05/2026\" and the source uses British format. Which setting prevents wrong parsing?",
      options: [
        { id: 'a', text: 'Disable load.' },
        { id: 'b', text: 'Pivot column.' },
        { id: 'c', text: 'Group by month.' },
        { id: 'd', text: 'Change Type With Locale set to English (United Kingdom).' },
      ],
      correctId: 'd',
      explanation:
        "Locale-aware change of type parses the text using British conventions so day and month are not swapped. The other operations do not address parsing.",
    },
    {
      id: 'pl300-79',
      topic: 'Visualise and analyse the data',
      question:
        "An analyst wants total revenue from a measure to display in millions with one decimal in a card visual. Which is the cleanest approach?",
      options: [
        { id: 'a', text: 'Set the format string of the measure to "#,0.0,,\\"M\\"".' },
        { id: 'b', text: 'Hardcode "M" inside the DAX expression with FORMAT and lose numeric type.' },
        { id: 'c', text: 'Change the data type to Boolean.' },
        { id: 'd', text: 'Use bookmarks.' },
      ],
      correctId: 'a',
      explanation:
        "A model-level format string keeps the value numeric while displaying millions. FORMAT inside DAX returns text, which breaks aggregation and conditional formatting.",
    },
    {
      id: 'pl300-80',
      topic: 'Deploy and maintain assets',
      question:
        "A dataset must be refreshed every 15 minutes. The workspace is on a Power BI Premium capacity. Which approach is supported?",
      options: [
        { id: 'a', text: 'Disable RLS.' },
        { id: 'b', text: 'Set scheduled refresh to 15 minutes in the dataset settings page.' },
        { id: 'c', text: 'Use Personal gateway.' },
        { id: 'd', text: 'Use the XMLA endpoint or the REST API to trigger refresh on the desired cadence.' },
      ],
      correctId: 'd',
      explanation:
        "The scheduled refresh UI does not go below 30 minutes; the XMLA endpoint or REST API can trigger refreshes more frequently on Premium. Disabling RLS does nothing for refresh cadence.",
    },
    {
      id: 'pl300-81',
      topic: 'Model the data',
      question:
        "A modeler creates a calculated table named TopProducts using TOPN. The table appears not to refresh as the underlying Sales fact changes within a single session. Which is the correct understanding?",
      options: [
        { id: 'a', text: 'Calculated tables are virtual and never stored.' },
        { id: 'b', text: 'Calculated tables are evaluated at query time on every visual.' },
        { id: 'c', text: 'Calculated tables ignore filter context entirely.' },
        { id: 'd', text: 'Calculated tables are evaluated at refresh time, so they only update when the dataset refreshes.' },
      ],
      correctId: 'd',
      explanation:
        "Calculated tables, like calculated columns, materialise on dataset refresh. Measures and visuals get fresh values per query; calculated tables do not.",
    },
    {
      id: 'pl300-82',
      topic: 'Prepare the data',
      question:
        "A Power Query M expression uses Table.SelectRows after a join. The View Native Query option is no longer available, but the analyst expects the database to filter for performance. Which fix preserves folding?",
      options: [
        { id: 'a', text: 'Reorder the steps so filter precedes the operations that break folding.' },
        { id: 'b', text: 'Disable load on the query.' },
        { id: 'c', text: 'Switch to DirectQuery without changing the query.' },
        { id: 'd', text: 'Change the column type to Date.' },
      ],
      correctId: 'a',
      explanation:
        "Putting fold-friendly steps (like filter) before fold-breaking steps keeps folding alive. The other options do not restore the SQL pushdown.",
    },
    {
      id: 'pl300-83',
      topic: 'Visualise and analyse the data',
      question:
        "An analyst wants users to filter a single visual without filtering the rest of the page. Which feature supports this?",
      options: [
        { id: 'a', text: 'Change the storage mode.' },
        { id: 'b', text: 'Sync slicers across pages.' },
        { id: 'c', text: 'Create a bookmark.' },
        { id: 'd', text: 'Edit interactions to set the slicer\'s effect on other visuals.' },
      ],
      correctId: 'd',
      explanation:
        "Edit interactions controls per-visual cross-filter behaviour. Sync slicers and bookmarks address other UX problems.",
    },
    {
      id: 'pl300-84',
      topic: 'Deploy and maintain assets',
      question:
        "An organisation needs a dataset to remain queryable from Excel via Analyze in Excel even when the report author is on holiday. Which option ensures continuity?",
      options: [
        { id: 'a', text: 'Disable RLS.' },
        { id: 'b', text: 'Use Personal gateway under the author\'s account.' },
        { id: 'c', text: 'Restrict the dataset to one user.' },
        { id: 'd', text: 'Configure the dataset to use a service principal or shared service account for credentials.' },
      ],
      correctId: 'd',
      explanation:
        "A service principal or shared service account decouples refresh credentials from individual users so the dataset keeps working when an owner is away. Personal gateway is tied to one account.",
    },
    {
      id: 'pl300-85',
      topic: 'Model the data',
      question:
        "A snowflaked Geography table is connected to Customer through Region and Country tables. A bug causes one customer's filter to ignore the slicer on Country. Which model property is the most likely root cause?",
      options: [
        { id: 'a', text: 'Cardinality is set to many-to-many on the wrong relationship.' },
        { id: 'b', text: 'A relationship between Country and Region is inactive or filter direction is wrong.' },
        { id: 'c', text: 'A measure uses CALCULATE with no filter.' },
        { id: 'd', text: 'The model has no Date table.' },
      ],
      correctId: 'b',
      explanation:
        "If the path from Country down to Customer is broken or filters in the wrong direction, the slicer cannot reach the customer rows. A missing Date table does not explain this geography filter problem.",
    },
    {
      id: 'pl300-86',
      topic: 'Prepare the data',
      question:
        "A function in M returns a Table from a SQL stored procedure. The analyst wants to invoke the function for each value in a Region list and combine the result. Which is the canonical approach?",
      options: [
        { id: 'a', text: 'Add a column that invokes the function per row, then expand the resulting tables.' },
        { id: 'b', text: 'Use Pivot column.' },
        { id: 'c', text: 'Use Group by with no aggregation.' },
        { id: 'd', text: 'Disable load.' },
      ],
      correctId: 'a',
      explanation:
        "Adding a column that invokes the function and then expanding nested tables is the standard pattern. The other operations do not invoke a function per row.",
    },
    {
      id: 'pl300-87',
      topic: 'Visualise and analyse the data',
      question:
        "A user reports that a card visual shows a different total than the same measure in a matrix on the same page. Which is the most likely reason?",
      options: [
        { id: 'a', text: 'RLS is applied to the card only.' },
        { id: 'b', text: 'Measures cannot be reused across visuals.' },
        { id: 'c', text: 'The card visual rounds differently by default.' },
        { id: 'd', text: 'Filters or interactions in scope on the matrix differ from the card.' },
      ],
      correctId: 'd',
      explanation:
        "Different filter context, page filters, slicer interactions, or visual-level filters change a measure's value per visual. Measures are reusable; RLS applies to the dataset, not a single visual.",
    },
    {
      id: 'pl300-88',
      topic: 'Deploy and maintain assets',
      question:
        "An admin must enforce that personal data labelled Highly Confidential cannot be exported to .csv from Power BI. Which combination achieves this?",
      options: [
        { id: 'a', text: 'Personal gateway only.' },
        { id: 'b', text: 'Workspace roles only.' },
        { id: 'c', text: 'Endorsements only.' },
        { id: 'd', text: 'Sensitivity labels with policy that blocks export from Power BI plus tenant settings disabling export for that label.' },
      ],
      correctId: 'd',
      explanation:
        "Sensitivity labels carry export controls and tenant settings refine which export paths are allowed. Workspace roles and endorsements do not control export.",
    },
    {
      id: 'pl300-89',
      topic: 'Model the data',
      question:
        "A modeler stores a measure as: VAR _CustomerCount = DISTINCTCOUNT(Customer[CustomerKey]) RETURN _CustomerCount. What is the main reason to use VAR here?",
      options: [
        { id: 'a', text: 'VAR makes the value cached for the duration of the formula and improves clarity.' },
        { id: 'b', text: 'VAR forces recalculation on every visual.' },
        { id: 'c', text: 'VAR removes filter context.' },
        { id: 'd', text: 'VAR is mandatory in DISTINCTCOUNT.' },
      ],
      correctId: 'a',
      explanation:
        "Variables compute once per evaluation, improving readability and often performance. They do not change filter context.",
    },
    {
      id: 'pl300-90',
      topic: 'Prepare the data',
      question:
        "An analyst needs to combine sales rows from two tables that have slightly different column orders. The destination should keep all columns from both. Which Power Query operation fits and how should it behave?",
      options: [
        { id: 'a', text: 'Pivot.' },
        { id: 'b', text: 'Append; columns must be in the exact same order.' },
        { id: 'c', text: 'Merge; this is the right operation for stacking rows.' },
        { id: 'd', text: 'Append; Power Query aligns by column name regardless of order.' },
      ],
      correctId: 'd',
      explanation:
        "Append matches columns by name, not position, and adds null where a column is missing. Merge joins rather than stacks.",
    },
    {
      id: 'pl300-91',
      topic: 'Visualise and analyse the data',
      question:
        "A report shows currency in EUR by default. A French viewer should see the same numbers with French separators (1 234,56). Which feature handles this without rebuilding the report?",
      options: [
        { id: 'a', text: 'Field-level format string with a locale-aware format and culture handling on the dataset.' },
        { id: 'b', text: 'Replace all numbers with text in Power Query.' },
        { id: 'c', text: 'Use a calculated column with FORMAT for every measure.' },
        { id: 'd', text: 'Add a French theme JSON.' },
      ],
      correctId: 'a',
      explanation:
        "Format strings combined with the client culture render numbers in the viewer's locale. Replacing numbers with text breaks aggregation; FORMAT in calculated columns is fragile and slow.",
    },
    {
      id: 'pl300-92',
      topic: 'Deploy and maintain assets',
      question:
        "A team wants to track usage and adoption of a Power BI app to decide which reports to invest in. Which built-in tool fits?",
      options: [
        { id: 'a', text: 'Q&A linguistic schema.' },
        { id: 'b', text: 'Sensitivity labels report.' },
        { id: 'c', text: 'Bookmarks panel.' },
        { id: 'd', text: 'Usage metrics report on the workspace or app.' },
      ],
      correctId: 'd',
      explanation:
        "Usage metrics show views and unique users per report. The other tools answer different questions.",
    },
    {
      id: 'pl300-93',
      topic: 'Model the data',
      question:
        "A modeler wants to filter Sales rows in a measure where Customer[Country] equals \"NL\" while honouring all other filters. Which expression is correct?",
      options: [
        { id: 'a', text: 'CALCULATE([Total Sales], REMOVEFILTERS(Customer)).' },
        { id: 'b', text: 'CALCULATE([Total Sales], ALL(Customer[Country])).' },
        { id: 'c', text: 'CALCULATE([Total Sales], ALLSELECTED(Customer)).' },
        { id: 'd', text: 'CALCULATE([Total Sales], Customer[Country] = "NL").' },
      ],
      correctId: 'd',
      explanation:
        "A boolean filter on a column applies an additional filter while keeping other context. The other options remove or change context rather than narrow it.",
    },
    {
      id: 'pl300-94',
      topic: 'Prepare the data',
      question:
        "A monthly refresh fails because one CSV file occasionally has an extra column. Which Power Query approach makes the query resilient?",
      options: [
        { id: 'a', text: 'Reference columns by name and use Table.SelectColumns with MissingField.Ignore.' },
        { id: 'b', text: 'Reference columns by index.' },
        { id: 'c', text: 'Disable load on the query.' },
        { id: 'd', text: 'Switch to DirectQuery.' },
      ],
      correctId: 'a',
      explanation:
        "Selecting columns by name with a tolerant missing-field option handles schema drift gracefully. Index-based references break when columns shift.",
    },
    {
      id: 'pl300-95',
      topic: 'Visualise and analyse the data',
      question:
        "A scorecard report needs a clear annual revenue goal with monthly check-ins and ownership per metric. Which Power BI feature is purpose-built?",
      options: [
        { id: 'a', text: 'Sync slicers.' },
        { id: 'b', text: 'Bookmarks group.' },
        { id: 'c', text: 'Tooltip page.' },
        { id: 'd', text: 'Power BI metrics (scorecards).' },
      ],
      correctId: 'd',
      explanation:
        "Power BI metrics manage goals, owners, and check-ins. Bookmarks and tooltips do not represent goal tracking.",
    },
    {
      id: 'pl300-96',
      topic: 'Deploy and maintain assets',
      question:
        "An analyst wants a dataset to support both imported reference data and a large fact table queried in real time. Which configuration enables this?",
      options: [
        { id: 'a', text: 'A composite model with Import for dimensions and DirectQuery for the fact table.' },
        { id: 'b', text: 'A pure DirectQuery model.' },
        { id: 'c', text: 'A pure Import model.' },
        { id: 'd', text: 'Live connection to a paginated report.' },
      ],
      correctId: 'a',
      explanation:
        "Composite models mix storage modes per table so dimensions can be Import while the fact stays DirectQuery. A pure mode does not deliver both behaviours.",
    },
    {
      id: 'pl300-97',
      topic: 'Model the data',
      question:
        "A measure uses CALCULATE with FILTER over a million-row table to apply a complex condition. Performance is poor. Which optimisation usually helps?",
      options: [
        { id: 'a', text: 'Switch to DirectQuery without changing DAX.' },
        { id: 'b', text: 'Add bidirectional filtering on every relationship.' },
        { id: 'c', text: 'Move the report to a workspace with a higher-numbered ID.' },
        { id: 'd', text: 'Replace FILTER on the fact table with an equivalent boolean filter on a small dimension table or VALUES of a key column.' },
      ],
      correctId: 'd',
      explanation:
        "Filtering against a small dimension reduces the iterated rows and lets the engine push work down. Bidirectional filtering can cause ambiguity and rarely improves this case.",
    },
    {
      id: 'pl300-98',
      topic: 'Prepare the data',
      question:
        "A dataset connects to OneLake from Power BI Desktop in a Microsoft Fabric workspace. Which connector is most appropriate?",
      options: [
        { id: 'a', text: 'Web connector against a CSV URL only.' },
        { id: 'b', text: 'ODBC against the local file system.' },
        { id: 'c', text: 'SharePoint Online list.' },
        { id: 'd', text: 'OneLake or Lakehouse connector with Direct Lake or Import.' },
      ],
      correctId: 'd',
      explanation:
        "The OneLake or Lakehouse connector is designed for Fabric storage and supports Direct Lake. ODBC and SharePoint connect to different stores entirely.",
    },
    {
      id: 'pl300-99',
      topic: 'Visualise and analyse the data',
      question:
        "An analyst wants the legend of a column chart to be sorted by total value descending so the largest series is at the top. Which approach fits?",
      options: [
        { id: 'a', text: 'Sort the visual by the measure value descending using the More options menu.' },
        { id: 'b', text: 'Add a calculated column with rank in DAX.' },
        { id: 'c', text: 'Use bookmarks to fake the order.' },
        { id: 'd', text: 'Remove the legend entirely.' },
      ],
      correctId: 'a',
      explanation:
        "Visual sort by the measure value gives the desired order without model changes. Bookmarks and removing the legend do not solve the ordering question.",
    },
    {
      id: 'pl300-100',
      topic: 'Deploy and maintain assets',
      question:
        "A Power BI Pro user needs to share a published report with a guest from a partner company. Which setup respects governance and external sharing rules?",
      options: [
        { id: 'a', text: 'Add the guest as a B2B user in Microsoft Entra ID and grant access through the workspace or app audience, with sharing settings allowed by tenant policy.' },
        { id: 'b', text: 'Email the .pbix file as an attachment.' },
        { id: 'c', text: 'Make the workspace public on the internet.' },
        { id: 'd', text: 'Send a screenshot.' },
      ],
      correctId: 'a',
      explanation:
        "Microsoft Entra ID B2B is the governed path for external access to Power BI content. Emailing the .pbix file or making a workspace public bypasses tenant controls.",
    },
  ],
}
