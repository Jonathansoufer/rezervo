import React, { Component } from "react";
import Timeline, {
  TimelineMarkers,
  TodayMarker,
  CustomMarker
} from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "./Timeline.css";
import moment from "moment";

class Calendar extends Component {
  state = {
    groups: [
      { id: 1, title: "Suite 1" },
      { id: 2, title: "Suite 2" },
      { id: 3, title: "Suite 3" },
      { id: 4, title: "Suite 4" },
      { id: 5, title: "Suite 5" },
      { id: 6, title: "Suite 6" },
      { id: 7, title: "Suite 7" },
      { id: 8, title: "Suite 8" },
      { id: 9, title: "Suite 9" },
      { id: 10, title: "Suite 10" }
    ],
    items: [
      {
        id: 1,
        group: 1,
        title: "Reserva 1",
        start_time: moment(),
        end_time: moment().add(1, "days"),
        canMove: true,
        lineHeight: 100,
        bgColor: "#3F93F5",
        selectedBgColor: "#2dd1ac"
      },
      {
        id: 2,
        group: 2,
        title: "Reserva 2",
        start_time: moment().add(-0.5, "days"),
        end_time: moment().add(0.5, "days"),
        canMove: true,
        bgColor: "#3F93F5",
        selectedBgColor: "#2dd1ac"
      },
      {
        id: 3,
        group: 1,
        title: "Reserva 3",
        start_time: moment().add(2, "days"),
        end_time: moment().add(3, "days"),
        canMove: true,
        canResize: false,
        canChangeGroup: false,
        className: "weekend",
        bgColor: "#3F93F5",
        selectedBgColor: "#2dd1ac"
      }
    ]
  };

  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const { items, groups } = this.state;

    const group = groups[newGroupOrder];

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start_time: dragTime,
              end_time: dragTime + (item.end_time - item.start_time),
              group: group.id
            })
          : item
      )
    });

    console.log("Moved", itemId, dragTime, newGroupOrder);
  };

  itemRenderer = ({ item, timelineContext, itemContext, getItemProps, getResizeProps }) => {
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
    const backgroundColor = itemContext.selected
      ? item.selectedBgColor
      : item.bgColor;
    const borderColor = itemContext.selected ? "#009f7d" : "#3F93F5";
    return (
      <div
        {...getItemProps({
          style: {
            backgroundColor,
            color: "#FFF",
            fontSize: 14,
            borderColor,
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 4,
            borderLeftWidth: 0,
            borderRightWidth: itemContext.selected ? 3 : 1
          },
          onMouseDown: () => {
            console.log("on item click", item);
          }
        })}
      >
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

        <div
          style={{
            height: itemContext.dimensions.height,
            overflow: "hidden",
            paddingLeft: 3,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {itemContext.title}
        </div>

        {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
      </div>
    );
  };

  render() {
    return (
      <Timeline
        groups={this.state.groups}
        items={this.state.items}
        defaultTimeStart={moment().add(-12, "days")}
        defaultTimeEnd={moment().add(12, "days")}
        onItemMove={this.handleItemMove}
        traditionalZoom={false}
        itemRenderer={this.itemRenderer}
        onZoom={() => 1}
      >
        <TimelineMarkers>
          <TodayMarker />
          <CustomMarker date={Date.now()}>
            {({ styles, date }) => {
              const customStyles = {
                ...styles,
                backgroundColor: "#7ec3ff",
                width: "10px",
                opacity: 0.9
              };
              return <div style={customStyles} />;
            }}
          </CustomMarker>
        </TimelineMarkers>
      </Timeline>
    );
  }
}

export default Calendar;
