import {
  ArrowUpRightIcon,
  BellIcon,
  ChevronDownIcon,
  HeartIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react";
import React, { JSX } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const DashboardOverviewSection = () => {
  // Data for metric cards
  const metricCards = [
    {
      title: "Total Campaigns",
      value: "12",
      icon: "📊",
      iconBg: "bg-solitaire",
      iconColor: "text-jaffa",
      status: "2 new this month",
      statusIcon: "↑",
      statusColor: "text-mountain-meadow",
    },
    {
      title: "Active Campaigns",
      value: "5",
      icon: "📈",
      iconBg: "bg-zumthor",
      iconColor: "text-mariner",
      status: "All on track",
      statusIcon: "✓",
      statusColor: "text-mountain-meadow",
    },
    {
      title: "Monthly Spend",
      value: "Ksh90,450",
      icon: "$",
      iconBg: "bg-humming-bird",
      iconColor: "text-watercourse",
      status: "8% under budget",
      statusIcon: "↓",
      statusColor: "text-mountain-meadow",
    },
    {
      title: "Success Rate",
      value: "74%",
      icon: "🏆",
      iconBg: "bg-feta",
      iconColor: "text-java",
      subtitle: "avg engagement improvement",
    },
  ];

  // Data for AI recommendations
  const recommendations = [
    {
      type: "High ROI Potential",
      description:
        "Increase budget for @techguru254 by 15% based on performance trends",
      icon: "$",
      bgColor: "bg-feta",
      iconBg: "bg-humming-bird",
      iconColor: "text-watercourse",
      borderColor: "border-blue-100",
    },
    {
      type: "Optimal Posting Time",
      description:
        "Schedule lifestyle content between 4-6 PM for 22% higher engagement",
      icon: "⏰",
      bgColor: "bg-zumthor",
      iconBg: "bg-pattens-blue",
      iconColor: "text-persian-blue",
      borderColor: "border-blue-100",
    },
    {
      type: "Attention Needed",
      description:
        'Campaign "Summer Sale" needs content refresh - engagement dropped 18%',
      icon: "!",
      bgColor: "bg-solitaire",
      iconBg: "bg-cinderella",
      iconColor: "text-thunderbird",
      borderColor: "border-orange-100",
    },
  ];

  // Data for suggested influencers
  const suggestedInfluencers = [
    {
      username: "@techguru254",
      rating: "4.8",
      tags: ["Tech", "Gadgets"],
      followers: "92K Followers",
      engagementRate: "9.8% ER",
      image: "/assets/images/jackson.jpg",
    },
    {
      username: "@lifestylebyzoe",
      rating: "4.9",
      tags: ["Lifestyle", "Travel"],
      followers: "120K Followers",
      engagementRate: "11.2% ER",
      image: "/assets/images/lisa.jpg",
    },
    {
      username: "@fitnessguru",
      rating: "4.7",
      tags: ["Fitness", "Nutrition"],
      followers: "85K Followers",
      engagementRate: "8.5% ER",
      image: "/assets/images/mike.jpg",
    },
  ];

  // Data for engagement metrics
  const engagementMetrics = [
    {
      title: "Total Views",
      value: "83,000",
      change: "12% from last month",
      trend: "up",
    },
    {
      title: "Total Clicks",
      value: "1,200",
      change: "8% from last month",
      trend: "up",
    },
    {
      title: "Conversion Rate",
      value: "3.8%",
      change: "1.2% from last month",
      trend: "up",
    },
  ];

  return (
    <div className="flex flex-col gap-2.5 flex-1 py-16">
      

      {/* Dashboard Content */}
      <div className="flex flex-col items-start gap-8 px-4 py-2.5 bg-gray-900">
        {/* Metric Cards */}
        <div className="flex items-start justify-center gap-6 w-full h-[142px]">
          {metricCards.map((card, index) => (
            <Card
              key={index}
              className="flex-1 border border-solid shadow-[0px_1px_2px_#0000000d] bg-gray-700"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-boulder text-sm">{card.title}</p>
                    <h2 className="font-semantic-heading-1 text-ebony-clay">
                      {card.value}
                    </h2>
                    {card.subtitle && (
                      <p className="text-boulder text-xs">{card.subtitle}</p>
                    )}
                  </div>
                  <div className={`p-3 ${card.iconBg} rounded-lg`}>
                    <span className={`text-lg ${card.iconColor}`}>
                      {card.icon}
                    </span>
                  </div>
                </div>

                {card.status && (
                  <div className="flex items-center">
                    <span className="text-mountain-meadow text-sm mr-1">
                      {card.statusIcon}
                    </span>
                    <span className="text-mountain-meadow text-sm">
                      {card.status}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="flex items-start justify-center gap-6 w-full h-[350px]">
          {/* Monthly Engagement Chart */}
          <Card className="flex-1 border border-solid shadow-[0px_1px_2px_#0000000d] bg-gray-700">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-ebony-clay text-lg">
                  Monthly Engagement
                </h3>
                <div className="flex items-start">
                  <Badge
                    variant="outline"
                    className="bg-athens-gray text-river-bed text-xs rounded-md mr-2"
                  >
                    Monthly
                  </Badge>
                  <Badge className="bg-athens-gray text-white text-xs rounded-md">
                    Quarterly
                  </Badge>
                </div>
              </div>

              <div className="h-64 w-full">
                <div className="w-full h-full bg-[url(/assets/lisa.png)] bg-cover bg-center" />
              </div>
            </CardContent>
          </Card>

          {/* Budget Allocation Chart */}
          <Card className="flex-1 border border-solid shadow-[0px_1px_2px_#0000000d] bg-gray-700">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-ebony-clay text-lg">
                  Budget Allocation
                </h3>
                <Badge
                  variant="outline"
                  className="bg-athens-gray text-river-bed text-xs rounded-md flex items-center"
                >
                  All Campaigns <ChevronDownIcon className="ml-1 h-3 w-3" />
                </Badge>
              </div>

              <div className="h-64 w-full">
                <div className="w-full h-full bg-[url(/assets/lisa.png)] bg-cover bg-center" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Metrics Section */}
        <div className="flex items-start justify-center gap-6 w-full h-[416px] ">
          {/* Top Performing Influencer */}
          <Card className="flex-1 border border-solid bg-gray-700 shadow-[0px_1px_2px_#0000000d]">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-ebony-clay text-lg">
                  Top Performing Influencer
                </h3>
                <Button variant="link" className="text-mariner p-0 bg-athens-gray">
                  View All
                </Button>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                  <Avatar className="w-16 h-16">
                    <div className="w-full h-full bg-[url(/assets/images/lisa.jpg)] bg-cover bg-center" />
                  </Avatar>
                </div>
                <div>
                  <h4 className="font-bold text-ebony-clay text-lg">
                    @influencer_queen
                  </h4>
                  <p className="text-river-bed text-sm">
                    Lifestyle &amp; Fashion
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 h-28">
                <div className="flex flex-col">
                  <p className="text-boulder text-sm">Engagement Rate</p>
                  <p className="font-bold text-ebony-clay text-lg">12.3%</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-boulder text-sm">Followers</p>
                  <p className="font-bold text-ebony-clay text-lg">245K</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-boulder text-sm">Campaigns</p>
                  <p className="font-bold text-ebony-clay text-lg">3</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-boulder text-sm">Avg. ROI</p>
                  <p className="font-bold text-ebony-clay text-lg">5.2x</p>
                </div>
              </div>

              <div className="flex items-start justify-between">
                <Button
                  variant="outline"
                  className="text-mariner border-mariner bg-athens-gray"
                >
                  View Profile
                </Button>
                <Button className="bg-[#f2994a] hover:bg-[#e68a3e] text-white">
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Engagement This Month */}
          <Card className="flex-1 border border-solid bg-gray-700 shadow-[0px_1px_2px_#0000000d]">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-ebony-clay text-lg">
                  Engagement This Month
                </h3>
                <Button variant="link" className="text-mariner p-0 bg-athens-gray">
                  View Details
                </Button>
              </div>

              <div className="flex flex-col gap-4">
                {engagementMetrics.map((metric, index) => (
                  <div key={index} className="flex flex-col">
                    <p className="text-boulder text-sm">{metric.title}</p>
                    <h4 className="font-semantic-heading-1 text-ebony-clay">
                      {metric.value}
                    </h4>
                    <div className="flex items-center">
                      <ArrowUpRightIcon className="text-mountain-meadow mr-1 h-4 w-4" />
                      <span className="text-mountain-meadow text-sm">
                        {metric.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card className="flex-1 border border-solid bg-gray-700 shadow-[0px_1px_2px_#0000000d]">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center">
                <div className="w-8 h-8 mr-3 bg-java rounded-full flex items-center justify-center">
                  <span className="text-white text-base">🤖</span>
                </div>
                <h3 className="font-bold text-ebony-clay text-lg">
                  AI Recommendations
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className={`p-3 ${rec.bgColor} rounded-lg border border-solid ${rec.borderColor} flex items-start`}
                  >
                    <div
                      className={`w-5 h-6 ${rec.iconBg} rounded-full flex items-center justify-center mr-3`}
                    >
                      <span className={`${rec.iconColor}`}>{rec.icon}</span>
                    </div>
                    <div>
                      <p className="text-ebony-clay text-sm font-medium">
                        {rec.type}
                      </p>
                      <p className="text-river-bed text-xs">
                        {rec.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Suggested Influencers */}
        <Card className="w-full border border-solid bg-gray-700 shadow-[0px_1px_2px_#0000000d]">
          <CardContent className="p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-ebony-clay text-lg">
                Suggested Influencers
              </h3>
              <Button variant="link" className="text-mariner p-0">
                View All Matches
              </Button>
            </div>

            <div className="flex items-start justify-center gap-4 w-full">
              {suggestedInfluencers.map((influencer, index) => (
                <Card key={index} className="flex-1 p-0 overflow-hidden bg-athens-gray">
                  <div className="relative">
                    <div
                      className="w-full h-32 bg-cover bg-center"
                      style={{ backgroundImage: `url(${influencer.image})` }}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 rounded-full w-6 h-6 p-1"
                    >
                      <HeartIcon className="h-4 w-4 text-gray-chateau" />
                    </Button>
                  </div>

                  <CardContent className="p-4 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-ebony-clay">
                        {influencer.username}
                      </h4>
                      <div className="flex items-center">
                        <StarIcon className="text-candlelight h-4 w-4 mr-1" />
                        <span className="text-black text-xs">
                          {influencer.rating}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {influencer.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-athens-gray text-river-bed text-xs rounded-full"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-boulder text-xs">
                        {influencer.followers}
                      </span>
                      <span className="text-boulder text-xs">
                        {influencer.engagementRate}
                      </span>
                    </div>

                    <div className="flex items-start justify-between">
                      <Button
                        variant="outline"
                        className="text-mariner border-mariner text-xs h-6 px-3"
                      >
                        View
                      </Button>
                      <Button className="bg-[#f2994a] hover:bg-[#e68a3e] text-white text-xs h-6 px-3">
                        Invite
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
