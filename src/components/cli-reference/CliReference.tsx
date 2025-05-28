import React, { useState } from "react";
import "./CliReference.css";
import SideNav from "./side-nav/SideNav";
import { Theme } from "../../Theme";
import { OpenCliDocument } from "../../OpenCli";
import IntroSection from "./command-section/IntroSection";
import CommandList from "./command-list/CommandList";

const doc: OpenCliDocument = {
  info: {
    title: "OpenCLI CLI",
    summary: "A CLI for working with OpenCLI Specs",
    description:
      "`ocli` is a command line interface designed to make working with [OpenCLI\nSpec documents](https://github.com/bcdxn/opencli/tree/main) easier. It provides a number of capabilities, including:\n\n- validating OpenCLI Spec documents\n- generating Documentation from OpenCLI Spec documents\n- generating boilerplate for various CLI frameworks from OpenCLI Spec\n  documents\n\nThe commands are documented below. You can also find out more about each\ncommand using the contextual `--help` flag. e.g.:\n\n```sh\nocli generate --help\n```",
    contact: {
      name: "The OpenCLI Team",
      url: "https://opencli.io",
    },
    license: {
      name: "MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
  },
  install: [
    {
      command: "go install ocli",
      name: "Go Install",
    },
    {
      name: "Binary Install",
      url: "https://github.com/bcdxn/opencli/releases",
      description:
        "You can visit the GitHub releases page of the project to download pre-compiled binaries appropriate for your system.",
    },
  ],
  commandTrie: {
    root: {
      command: {
        line: "ocli <arguments> [flags]",
        name: "ocli",
        leafName: "ocli",
        params: "<arguments> [flags]",
        group: true,
      },
      name: "ocli",
      commands: [
        {
          command: {
            line: "ocli generate <arguments> [flags]",
            name: "ocli generate",
            leafName: "generate",
            params: "<arguments> [flags]",
            group: true,
          },
          name: "ocli generate",
          commands: [
            {
              command: {
                line: "ocli generate code <arguments> [flags]",
                name: "ocli generate code",
                leafName: "code",
                params: "<arguments> [flags]",
                summary:
                  "Generate CLI Boilerplate code from an OpenCLI Spec document",
                description:
                  "The `generate cli` command will generate the boilerplate code for various CLI frameworks from an OpenCLI Spec document. You can specify the language of the CLI to be generated using the `--language` flag.",
              },
              name: "ocli generate code",
              commands: [],
            },
            {
              command: {
                line: "ocli generate docs <arguments> [flags]",
                name: "ocli generate docs",
                leafName: "docs",
                params: "<arguments> [flags]",
                summary: "Generate documentation from an OpenCLI Spec document",
                description:
                  "The `generate docs` command will generate documentation from an OpenCLI Spec document. You can specify the format of the documentation to be generated using the `--format` flag.",
              },
              name: "ocli generate docs",
              commands: [],
            },
          ],
        },
        {
          command: {
            line: "ocli specification <arguments> [flags]",
            name: "ocli specification",
            leafName: "specification",
            params: "<arguments> [flags]",
            group: true,
          },
          name: "ocli specification",
          commands: [
            {
              command: {
                line: "ocli specification check <arguments> [flags]",
                name: "ocli specification check",
                leafName: "check",
                params: "<arguments> [flags]",
                summary: "Check an OpenCLI Spec document for errors",
                description:
                  "The `check` command will validate an OpenCLI Spec document and return any errors that are found.",
              },
              name: "ocli specification check",
              commands: [],
            },
            {
              command: {
                line: "ocli specification versions <arguments> [flags]",
                name: "ocli specification versions",
                leafName: "versions",
                params: "<arguments> [flags]",
                summary:
                  "Print the versions of the OpenCLI Specifications that are supported",
                description:
                  "The `versions` command will print the versions of the OpenCLI Specification that are available and supported by this version of the OpenCLI CLI.",
              },
              name: "ocli specification versions",
              commands: [],
            },
          ],
        },
      ],
    },
  },
};

const CliReference: React.FC<{}> = () => {
  const [theme, setTheme] = useState(osThemePreference());

  return (
    <>
      <div
        className="cli-reference"
        data-theme={theme === Theme.DARK ? "dark" : "light"}
      >
        <div className="nav">
          <SideNav theme={theme} changeTheme={setTheme} doc={doc} />
        </div>

        <div className="content">
          <IntroSection doc={doc} />
          <CommandList doc={doc} />
        </div>
      </div>
    </>
  );
};

export default CliReference;

function osThemePreference(): Theme {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return Theme.DARK;
  } else {
    return Theme.LIGHT;
  }
}
